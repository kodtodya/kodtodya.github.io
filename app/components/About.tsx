'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Exact skills from portfolio Skills.js — "20+ technologies spanning middleware, cloud, messaging, and databases"
const SKILLS = [
  { group: '☕  Core Dev',           items: ['Core Java v8/v11', 'Spring', 'Spring Boot', 'Apache Camel', 'Spring AI'] },
  { group: '☁️  Cloud & Containers', items: ['Red Hat OpenShift', 'Docker', 'Kubernetes', 'Apache Karaf'] },
  { group: '📨  Messaging',          items: ['Apache Kafka', 'NATS', 'Redis', 'IBM WebSphere MQ', 'ActiveMQ Artemis'] },
  { group: '🗄️  Databases',          items: ['Oracle', 'PostgreSQL', 'MongoDB', 'Apache Cassandra', 'H2', 'Apache Derby'] },
  { group: '🔗  Middleware',          items: ['JBoss Fuse', 'JBoss EAP', 'JBoss A-MQ', 'Spring Integration', 'IBM IIB', 'Microservices'] },
  { group: '🔍  Observability',       items: ['Elasticsearch', 'Kibana', 'Log4j', 'Logback', 'slf4j', 'Prometheus', 'Grafana', 'Zookeeper'] },
  { group: '🧪  Testing',             items: ['JUnit', 'Cucumber', 'BDD', 'TDD', 'JaCoCo', 'Mockito'] },
  { group: '🛠️  Tools & VCS',         items: ['Git', 'BitBucket', 'IntelliJ', 'Eclipse', 'PGP'] },
];

const STATS = [
  { value: '15+', label: 'Years of Experience' },
  { value: '20+', label: 'Technologies Mastered' },
  { value: '50k+', label: 'Daily Transactions Handled' },
  { value: '100%', label: 'Open-Source Advocate' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative bg-bg py-24 sm:py-32 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: bio — verbatim from portfolio */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-4">About</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Hello, I&apos;m <span className="text-gradient-cyan">Avadhut</span>
            </h2>
            <div className="space-y-4 text-muted-2 text-sm leading-relaxed">
              <p style={{ color: "#ffa500" }}>
                A software developer and proud geek based in Pune — India&apos;s most livable city.
              </p>
              <p>
                I believe if we all strive to leave our community better than we found it, this world would be a fantastic place to live.
              </p>
              <p>
                Every day I look for ways to empower people by building software. Early on, I realized technology has a significant impact on improving lives. I dove into open-source technologies like Java and never stopped learning — simultaneously completing my masters while building my professional career.
              </p>
              <p>
                I take pride in architecture review and consultation for various open-source technologies, always searching for the latest, most interesting, and most importantly, open-source tools to solve real problems.
              </p>
              <p>
                Open to <span className="text-white font-medium">consulting engagements</span>, <span className="text-white font-medium">full-time roles</span>, and <span className="text-white font-medium">technical training</span> opportunities. Let&apos;s build something resilient together.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="glass-card rounded-xl p-4">
                  <div className="text-2xl font-black text-gradient-cyan">{s.value}</div>
                  <div className="text-xs text-muted font-mono mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-8 flex gap-3 flex-wrap">
              <a href="https://github.com/kodtodya" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 glass-card rounded-full text-sm text-muted-2 hover:text-accent hover:border-accent/30 transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                github.com/kodtodya
              </a>
              <a href="https://www.linkedin.com/in/kodtodya/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 glass-card rounded-full text-sm text-muted-2 hover:text-accent hover:border-accent/30 transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right: skills */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }} className="space-y-5">
            <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-6">Technical Arsenal</p>
            {SKILLS.map((group, gi) => (
              <motion.div key={group.group}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + gi * 0.08, duration: 0.5 }}>
                <p className="text-xs font-mono text-muted tracking-widest uppercase mb-2">{group.group}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill}
                      className="px-3 py-1.5 glass-card rounded-lg text-xs font-mono text-muted-2 hover:text-accent hover:border-accent/30 transition-all duration-200 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
