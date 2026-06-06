'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Each entry reveals only the company brand + a curated tech fingerprint.
// Specific roles, dates and descriptions remain intentionally undisclosed.
const COMPANIES = [
  {
    id: 'igate',
    label: 'iGATE',
    fingerprint: ['Core Java', 'Spring MVC', 'Hibernate', 'J2EE', 'SOA'],
    domain: 'Enterprise Software',
    accent: '#e879f9',
    icon: '◈',
    tagline: 'Where the enterprise journey began.',
  },
  {
    id: 'bnymellon',
    label: 'BNY Mellon',
    fingerprint: ['Java', 'Spring Batch', 'Design Patterns', 'Financial APIs', 'Kafka'],
    domain: 'Global Financial Services',
    accent: '#34d399',
    icon: '◆',
    tagline: 'Precision engineering for capital markets.',
  },
  {
    id: 'redhat',
    label: 'Red Hat',
    fingerprint: ['Apache Camel', 'Apache Kafka', 'JBoss Fuse', 'Openshift', 'JBoss EAP', 'ActiveMQ', 'OSS Middleware'],
    domain: 'Open-Source Middleware',
    accent: '#f97316',
    icon: '◉',
    tagline: 'Deep in the engine room of open source.',
  },
  {
    id: 'citi',
    label: 'Citi',
    fingerprint: ['Java', 'Apache Camel', 'Apache Kafka', 'Openshift', 'Middleware', 'Spring', 'Enterprise Integration'],
    domain: 'Banking & Financial Infrastructure',
    accent: '#fbbf24',
    icon: '◐',
    tagline: 'Institutional-grade quality at global scale.',
  },
];

// Aggregate domain signal shown in the header mosaic
const DOMAIN_TAGS = [
  'AI / RAG',
  'Microservices',
  'Apache Camel',
  'Middleware',
  'Spring Boot',
  'GoLang',
  'Apache Kafka',
  'OpenShift',
  'JBoss',
  'Event-Driven',
  'Financial APIs',
  'OSS',
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="relative bg-surface py-24 sm:py-32 px-6 noise">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="max-w-4xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-4">
            Career Chronicle
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            15+ Years Across<br />
            <span className="text-gradient-cyan">Financial &amp; OSS</span>
          </h2>
          <p className="mt-4 text-muted-2 text-sm max-w-lg leading-relaxed">
            A decade and a half forging enterprise systems across global banks, open-source giants,
            and consulting floors — one integration at a time.
          </p>

          {/* Domain tag mosaic */}
          <div className="mt-8 flex flex-wrap gap-2">
            {DOMAIN_TAGS.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                className="px-3 py-1 text-xs font-mono rounded-full border border-white/10 text-muted-2 bg-white/[0.03] hover:border-accent/40 hover:text-accent transition-colors duration-300 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ── Company Cards ── */}
        <div className="grid gap-6 sm:grid-cols-2">
          {COMPANIES.map((co, i) => (
            <motion.div
              key={co.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.13, duration: 0.6 }}
              className="glass-card rounded-2xl p-6 group hover:border-white/15 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle glow blob */}
              <div
                className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-[0.07] blur-2xl pointer-events-none"
                style={{ background: co.accent }}
              />

              {/* Header row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span
                    className="text-2xl leading-none select-none"
                    style={{ color: co.accent }}
                  >
                    {co.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white tracking-tight">{co.label}</h3>
                    <p className="text-[11px] font-mono uppercase tracking-widest mt-0.5"
                      style={{ color: co.accent }}>
                      {co.domain}
                    </p>
                  </div>
                </div>

                {/* Animated dot accent */}
                <div
                  className="w-2 h-2 rounded-full mt-1 opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: co.accent, boxShadow: `0 0 8px ${co.accent}` }}
                />
              </div>

              {/* Tagline */}
              <p className="text-xs text-muted-2 italic mb-5 leading-relaxed">
                {co.tagline}
              </p>

              {/* Tech fingerprint */}
              <div className="flex flex-wrap gap-2">
                {co.fingerprint.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-md border border-white/5 text-muted-2 transition-colors duration-300 group-hover:border-white/10"
                    style={{ backgroundColor: `${co.accent}0a` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Footer note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 text-center text-xs font-mono text-muted-2/50 tracking-widest"
        >
          ✦ &nbsp; full career details available on request &nbsp; ✦
        </motion.p>
      </div>
    </section>
  );
}
