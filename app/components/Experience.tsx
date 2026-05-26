'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Exact career timeline from kodtodya.github.io — "Career Chronicle"
const EXPERIENCE = [
  {
    role: 'Principal Consultant',
    company: 'OptiValueTek Consulting',
    period: 'Nov 2023 — Present',
    current: true,
    description:
      'Leading AI RAG development, middleware integration development, architecture reviews, and consulting for clients. Designing and implementing event-driven microservice architectures.',
    tech: ['AI RAG', 'Java', 'Spring Boot', 'GoLang', 'Apache Camel', 'Kafka', 'OpenShift'],
    accent: '#22d3ee',
  },
  {
    role: 'Sr. Integration Developer',
    company: 'Patona Technologies Ltd',
    period: 'Mar 2020 — Nov 2023',
    current: false,
    description:
      'Leading middleware integration development, architecture reviews, and consulting for enterprise clients. Designing event-driven microservice architectures using Apache Camel routes, Red Hat OpenShift, and Apache Kafka.',
    tech: ['Apache Camel', 'Kafka', 'Red Hat Fuse', 'OpenShift'],
    accent: '#a78bfa',
  },
  {
    role: 'Officer / Manager',
    company: 'Citicorp Services India Private Limited',
    period: 'May 2018 — Feb 2020',
    current: false,
    description:
      'Managed and developed Java & middleware integration applications for financial services infrastructure. Operated in a CMMI-5 certified process environment with strict quality standards.',
    tech: ['Java', 'Middleware', 'CMMI-5', 'Spring'],
    accent: '#fbbf24',
  },
  {
    role: 'Software Maintenance Engineer',
    company: 'Red Hat Inc',
    period: 'Jun 2016 — May 2018',
    current: false,
    description:
      'Provided expert software maintenance support for Red Hat JBoss middleware products. Worked directly with enterprise clients globally to resolve complex integration issues, filed upstream fixes, and contributed to product quality.',
    tech: ['JBoss Fuse', 'JBoss EAP', 'A-MQ', 'OSS Support'],
    accent: '#f97316',
  },
  {
    role: 'Senior Applications Developer',
    company: 'BNY Mellon Technologies',
    period: 'Jan 2015 — May 2016',
    current: false,
    description:
      'Developed and enhanced Java-based financial applications and middleware integrations. Led implementation of design patterns to improve code reusability and maintained high code quality standards.',
    tech: ['Java', 'Spring', 'Design Patterns', 'Finance'],
    accent: '#34d399',
  },
  {
    role: 'Senior Software Engineer',
    company: 'IGATE Global Solutions Limited',
    period: 'Sep 2011 — Dec 2014',
    current: false,
    description:
      'Built enterprise Java applications and integration solutions across multiple client engagements. Established a strong foundation in open-source middleware technologies and enterprise integration patterns.',
    tech: ['Core Java', 'Integration', 'Enterprise'],
    accent: '#e879f9',
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="relative bg-surface py-24 sm:py-32 px-6 noise">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-4">Career Chronicle</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            14+ Years Across<br /><span className="text-gradient-cyan">Financial &amp; OSS</span>
          </h2>
          <p className="mt-4 text-muted-2 text-sm max-w-lg leading-relaxed">
            Financial services, enterprise software, and open-source middleware — from IGATE to Red Hat to Citibank and beyond.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-purple-500/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <motion.div key={exp.role + exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="relative flex gap-6 md:gap-8">

                {/* Number dot */}
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black border relative"
                    style={{ background: `${exp.accent}18`, borderColor: `${exp.accent}44`, color: exp.accent }}>
                    {String(i + 1).padStart(2, '0')}
                    {exp.current && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent animate-pulse" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-5 sm:p-6 flex-1 hover:border-white/15 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-bold text-white">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-accent/15 text-accent border border-accent/30">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium mt-0.5" style={{ color: exp.accent }}>{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono text-muted glass-card px-3 py-1 rounded-full shrink-0 self-start">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted-2 leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-md border border-white/5 text-muted-2"
                        style={{ backgroundColor: `${exp.accent}0a` }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
