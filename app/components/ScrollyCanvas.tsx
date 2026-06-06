'use client';

import { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';

const TOTAL_FRAMES = 150;
const frameSrc = (n: number) =>
  `/sequence/frame_${String(n).padStart(3, '0')}_delay-0.067s.webp`;

function drawCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, w: number, h: number) {
  if (!img.complete || img.naturalWidth === 0) return;
  const ia = img.naturalWidth / img.naturalHeight;
  const ca = w / h;
  let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
  if (ia > ca) { sw = img.naturalHeight * ca; sx = (img.naturalWidth - sw) / 2; }
  else          { sh = img.naturalWidth / ca;  sy = (img.naturalHeight - sh) / 2; }
  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w, h);
}

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
function lerp(v: number, inMin: number, inMax: number) {
  if (inMax <= inMin) return v >= inMax ? 1 : 0;
  return clamp01((v - inMin) / (inMax - inMin));
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const images       = useRef<(HTMLImageElement | null)[]>(Array(TOTAL_FRAMES).fill(null));
  const curFrame     = useRef(0);
  const rafId        = useRef<number | null>(null);

  // overlay refs — driven imperatively, zero React re-renders
  const heroRef  = useRef<HTMLDivElement>(null);
  const midARef  = useRef<HTMLDivElement>(null);
  const midBRef  = useRef<HTMLDivElement>(null);
  const ctaRef   = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // ── Combined scroll listener: canvas + overlays ──────────────────────
  useEffect(() => {
    const setOverlay = (
      el: HTMLDivElement | null,
      opacity: number,
      tx = 0,
      ty = 0
    ) => {
      if (!el) return;
      el.style.opacity = String(Math.round(opacity * 1000) / 1000);
      el.style.transform = `translate(${tx}px, ${ty}px)`;
      // completely remove from hit-testing & compositing when invisible
      el.style.visibility = opacity < 0.01 ? 'hidden' : 'visible';
    };

    const unsub = scrollYProgress.on('change', (p) => {
      // --- Canvas ---
      const target = Math.min(Math.floor(p * (TOTAL_FRAMES - 1)), TOTAL_FRAMES - 1);
      if (target !== curFrame.current) {
        curFrame.current = target;
        if (rafId.current) cancelAnimationFrame(rafId.current);
        rafId.current = requestAnimationFrame(() => {
          const canvas = canvasRef.current;
          const img = images.current[target];
          if (!canvas || !img || !img.complete) return;
          const ctx = canvas.getContext('2d');
          if (ctx) drawCover(ctx, img, canvas.width, canvas.height);
        });
      }

      // --- Hero: 0–22% full, fade out 22–28%, GONE after 28% ---
      const heroOp = p <= 0.22 ? 1 : p >= 0.28 ? 0 : 1 - lerp(p, 0.22, 0.28);
      setOverlay(heroRef.current, heroOp, 0, -lerp(p, 0.22, 0.32) * 50);

      // --- Mid A (left): 30–56%, slide in from left ---
      const midAOp = p < 0.30 ? 0 : p < 0.36 ? lerp(p, 0.30, 0.36)
                   : p < 0.54 ? 1 : p < 0.60 ? 1 - lerp(p, 0.54, 0.60) : 0;
      setOverlay(midARef.current, midAOp, (1 - lerp(p, 0.30, 0.38)) * -50);

      // --- Mid B (right): 62–84%, slide in from right ---
      const midBOp = p < 0.62 ? 0 : p < 0.68 ? lerp(p, 0.62, 0.68)
                   : p < 0.81 ? 1 : p < 0.87 ? 1 - lerp(p, 0.81, 0.87) : 0;
      setOverlay(midBRef.current, midBOp, (1 - lerp(p, 0.62, 0.70)) * 50);

      // --- CTA: 88–100% fade in, stays GONE below 88% ---
      const ctaOp = p < 0.88 ? 0 : lerp(p, 0.88, 0.95);
      setOverlay(ctaRef.current, ctaOp, 0, (1 - lerp(p, 0.88, 0.96)) * 40);
    });

    return () => { unsub(); if (rafId.current) cancelAnimationFrame(rafId.current); };
  }, [scrollYProgress]);

  // ── Image preloading ─────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const loadOne = (i: number): Promise<void> => new Promise((res) => {
      const img = new Image();
      img.onload = () => {
        images.current[i] = img;
        if (i === 0) { const ctx = canvas.getContext('2d'); if (ctx) drawCover(ctx, img, canvas.width, canvas.height); }
        res();
      };
      img.onerror = () => res();
      img.src = frameSrc(i);
    });

    (async () => {
      await Promise.all(Array.from({ length: 10 }, (_, i) => loadOne(i)));
      await Promise.all(Array.from({ length: 40 }, (_, i) => loadOne(i + 10)));
      for (let i = 50; i < TOTAL_FRAMES; i++) loadOne(i);
    })();
  }, []);

  // ── Resize ──────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const img = images.current[curFrame.current];
      if (img) { const ctx = canvas.getContext('2d'); if (ctx) drawCover(ctx, img, canvas.width, canvas.height); }
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">

        {/* Canvas */}
        <canvas ref={canvasRef} style={{ position:'absolute', inset:0, display:'block', width:'100%', height:'100%' }} />

        {/* Vignette */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:1,
          background:'radial-gradient(ellipse at center, transparent 30%, rgba(18,18,18,0.65) 100%)' }} />

        {/* ── HERO (0–28%) — full opacity on load, hard-gone by 28% ── */}
        <div ref={heroRef} style={{ position:'absolute', inset:0, zIndex:10, opacity:1, visibility:'visible',
          display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
          textAlign:'center', padding:'0 1.5rem', pointerEvents:'none', willChange:'opacity, transform' }}>
          <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-4 opacity-80">
            Solutions Architect · Pune, India
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-6">
            <span className="text-gradient-cyan">Avadhut</span><br />
            <span className="text-white">Lele</span>
          </h1>
          <p className="text-muted-2 text-sm sm:text-base max-w-md leading-relaxed">
            15+ years crafting resilient middleware integration systems<br className="hidden sm:block" /> and cloud-native architectures.
          </p>
          <div className="mt-10 flex items-center gap-2 animate-bounce">
            <div className="w-[1px] h-8 bg-accent/50" />
            <span className="text-xs text-muted font-mono tracking-widest">scroll</span>
            <div className="w-[1px] h-8 bg-accent/50" />
          </div>
        </div>

        {/* ── MID A — left (30–60%) ── */}
        <div ref={midARef} style={{ position:'absolute', inset:0, zIndex:10, opacity:0, visibility:'hidden',
          display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center',
          padding:'0 4rem', pointerEvents:'none', willChange:'opacity, transform' }}>
          <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-3 opacity-70">01 / Philosophy</p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight text-white max-w-2xl">
            I architect <span className="text-gradient-cyan">resilient</span><br />integrations.
          </h2>
          <p className="mt-6 text-muted-2 text-sm sm:text-base max-w-md leading-relaxed">
            Apache Camel · RAG · Kafka · Spring Boot · GoLang
          </p>
        </div>

        {/* ── MID B — right (62–87%) ── */}
        <div ref={midBRef} style={{ position:'absolute', inset:0, zIndex:10, opacity:0, visibility:'hidden',
          display:'flex', flexDirection:'column', alignItems:'flex-end', justifyContent:'center',
          textAlign:'right', padding:'0 4rem', pointerEvents:'none', willChange:'opacity, transform' }}>
          <p className="font-mono text-xs tracking-[0.3em] text-accent-amber uppercase mb-3 opacity-70">02 / Craft</p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight text-white max-w-2xl">
            Bridging design<br /><span className="text-gradient-amber">&amp; engineering</span>
          </h2>
          <p className="mt-6 text-muted-2 text-sm sm:text-base max-w-md leading-relaxed">
            Kubernetes · Cloud-Native · Financial Services · OSS Advocacy
          </p>
        </div>

        {/* ── CTA (88–100%) ── */}
        <div ref={ctaRef} style={{ position:'absolute', inset:0, zIndex:10, opacity:0, visibility:'hidden',
          display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
          textAlign:'center', padding:'0 1.5rem', willChange:'opacity, transform' }}>
          <div style={{ position:'absolute', inset:0, pointerEvents:'none',
            background:'radial-gradient(ellipse at center, rgba(18,18,18,0.55) 0%, transparent 70%)' }} />
          <div style={{ position:'relative', zIndex:1 }}>
            <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-4 opacity-70">
              03 / Let&apos;s work together
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-2">
              Ready to build something
            </h2>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-10">
              <span className="text-gradient-cyan">remarkable?</span>
            </h2>
            <div className="flex gap-4 flex-wrap justify-center">
              <a href="https://github.com/kodtodya" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white text-[#121212] font-bold text-sm rounded-full transition-all duration-300 hover:bg-accent hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-105">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Follow on GitHub
              </a>
              <a href="https://www.linkedin.com/in/kodtodya/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 glass-card font-semibold text-sm rounded-full text-white transition-all duration-300 hover:border-accent/50 hover:text-accent hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] hover:scale-105">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3.5 text-muted-2 text-sm font-mono transition-all duration-300 hover:text-accent">
                View Work ↓
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
