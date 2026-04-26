import React, { useState, useEffect } from 'react';
import './Hero.css';

const WORDS = [
  'Solutions Architect',
  'Integration Developer',
  'AI RAG Developer',
  'Apache Camel Expert',
  'Kafka Enthusiast',
  'Open Source Advocate',
  'Middleware Specialist',
  'Music Lover',
  'Minimalist',
  'Investor'
];

const STATS = [
  { value: '14+', label: 'Years Experience' },
  { value: '6',   label: 'Companies' },
  { value: '20+', label: 'Technologies' },
  { value: '∞',   label: 'Coffee Cups' },
];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = WORDS[wordIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      }, 65);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      }, 35);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx]);

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">

        {/* ── Left: Text ── */}
        <div className="hero-text">
          <div className="hero-available">
            <span className="hero-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-name">
            Avadhut<br />Lele
          </h1>

          <div className="hero-typewriter">
            <span className="hero-typed">{displayed}</span>
            <span className="hero-cursor">|</span>
          </div>

          <p className="hero-desc">
            14+ years crafting resilient middleware integration systems and
            cloud-native architectures. Empowering organisations through open-source
            technology — from Apache Camel routes to Kubernetes deployments.
          </p>

          <div className="hero-cta-row">
            <a href="#hire" className="hero-btn-primary">Get in touch</a>
            <a href="#experience" className="hero-btn-secondary">View work</a>
          </div>
        </div>

        {/* ── Right: Bento grid ── */}
        <div className="hero-bento">

          {/* Location card */}
          <div className="bento-card bento-location">
            <span className="bento-icon">📍</span>
            <div>
              <div className="bento-title">Pune, India</div>
              <div className="bento-sub">Most livable city</div>
            </div>
          </div>

          {/* Stack card */}
          <div className="bento-card bento-stack">
            <div className="bento-label">Core Stack</div>
            <div className="bento-chips">
              {['Java', 'GoLang', 'Python', 'Camel', 'Spring Boot', 'Kafka', 'React', 'OpenShift'].map(t => (
                <span key={t} className="bento-chip">{t}</span>
              ))}
            </div>
          </div>

          {/* Status card */}
          <div className="bento-card bento-status">
            <div className="status-dot-wrap">
              <span className="status-dot" />
              <span className="status-dot status-dot--ring" />
            </div>
            <div className="bento-title">Open to Work</div>
            <div className="bento-sub">Consulting & Full-time</div>
          </div>

          {/* Stats */}
          {STATS.map(s => (
            <div key={s.label} className="bento-card bento-stat">
              <div className="bento-stat-num">{s.value}</div>
              <div className="bento-stat-label">{s.label}</div>
            </div>
          ))}

          {/* OSS card */}
          <div className="bento-card bento-oss">
            <span className="bento-icon">⚡</span>
            <div>
              <div className="bento-title">Open Source</div>
              <div className="bento-sub">Architect & Advocate</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
