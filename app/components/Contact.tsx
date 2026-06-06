'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [copied, setCopied] = useState(false);

  const email = 'kodtodya@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative bg-bg py-24 sm:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-4">Let&apos;s Connect</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            Got a complex<br /><span className="text-gradient-cyan">challenge?</span>
          </h2>
          <p className="text-muted-2 text-base leading-relaxed max-w-lg mx-auto mb-12">
            Whether you need a <strong className="text-white">technical sounding board</strong>, want to discuss <strong className="text-white">architecture patterns</strong>, or simply have a question — feel free to reach out. The right conversations tend to find the right outcomes.
          </p>

          {/* Email copy */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass-card rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-mono text-sm text-muted-2">{email}</span>
            <button onClick={handleCopy}
              className="px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: copied ? 'rgba(34,211,238,0.2)' : 'transparent',
                color: copied ? '#22d3ee' : '#9ca3af',
                border: `1px solid ${copied ? 'rgba(34,211,238,0.4)' : 'rgba(255,255,255,0.1)'}`,
              }}>
              {copied ? '✓ Copied!' : 'Copy Email'}
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.35, duration: 0.5 }}
            className="flex items-center justify-center gap-4 flex-wrap">
            {[
              { label: 'GitHub', href: 'https://github.com/kodtodya', icon: '⌥' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kodtodya/', icon: '↗' },
              { label: 'Portfolio', href: 'https://kodtodya.github.io', icon: '◈' },
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-full text-sm text-muted-2 hover:text-accent hover:border-accent/30 transition-all duration-300 group">
                <span className="text-accent group-hover:scale-110 transition-transform">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
