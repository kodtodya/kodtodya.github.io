'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Real projects from kodtodya's GitHub profile
const PROJECTS = [
  {
    id: 'pacs008-nats',
    tag: 'Distributed Systems',
    title: 'PACS.008 Processor on NATS',
    description:
      'ISO 20022-compliant financial message processing pipeline using Spring Boot microservices, NATS JetStream for guaranteed-delivery payment routing between producer, transformer, and consumer services.',
    tech: ['Spring Boot', 'NATS', 'JetStream', 'ISO 20022', 'Docker'],
    accent: '#22d3ee',
    href: 'https://github.com/kodtodya/pacs008-processor-on-nats',
    year: '2024',
  },
  {
    id: 'apache-camel-practices',
    tag: 'Enterprise Integration',
    title: 'Apache Camel Practices',
    description:
      'A comprehensive collection of Apache Camel integration patterns and examples covering EIPs, routing, transformation, and enterprise messaging — practical reference for middleware developers.',
    tech: ['Apache Camel', 'Spring Boot', 'JMS', 'REST', 'EIP'],
    accent: '#a78bfa',
    href: 'https://github.com/kodtodya/camel-spring-boot-examples',
    year: '2023',
  },
  {
    id: 'ai-practices',
    tag: 'AI',
    title: 'AI Practices',
    description:
      'Hands-on AI integration examples demonstrating RAG, LangChain, Ollama, Spring Boot and Java — a solid foundation for AI architectures.',
    tech: ['RAG', 'LangChain', 'Ollama', 'Spring Boot'],
    accent: '#fbbf24',
    href: 'https://github.com/kodtodya/ai-spring-boot-examples',
    year: '2025',
  },
  {
    id: 'kafka-practices',
    tag: 'Event Streaming',
    title: 'Kafka Practices',
    description:
      'Apache Kafka producer/consumer examples with Spring Kafka — covering partitioning, consumer groups, offset management and real-world event-driven architecture patterns.',
    tech: ['Apache Kafka', 'Spring Kafka', 'Java', 'Docker'],
    accent: '#34d399',
    href: 'https://github.com/kodtodya/apache-kafka-examples',
    year: '2023',
  },
  {
    id: 'spring-boot-practices',
    tag: 'Backend',
    title: 'Spring Boot Practices',
    description:
      'Reference implementations for Spring Boot best practices — REST APIs, security, data access, testing strategies, and microservice patterns used across enterprise projects.',
    tech: ['Spring Boot', 'Spring Security', 'JPA', 'REST', 'JUnit'],
    accent: '#fb923c',
    href: 'https://github.com/kodtodya/spring-boot-examples',
    year: '2022',
  },
  {
    id: 'interview-prep',
    tag: 'Open Source',
    title: 'Interview Preparation Repository',
    description:
      'Multi-domain interview preparation repository with 200+ curated technical questions covering Java, Go, React, System Design, AWS, Design Patterns and Kubernetes.',
    tech: ['Java', 'Go', 'React', 'System Design', 'AWS'],
    accent: '#e879f9',
    href: 'https://github.com/kodtodya/interview-preparation',
    year: '2026',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' as const },
  }),
};

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={cardVariants}
      className="group relative glass-card rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-500"
      whileHover={{ scale: 1.015, boxShadow: `0 0 40px ${project.accent}18, 0 20px 60px rgba(0,0,0,0.4)` }}
    >
      {/* Hover glow blob */}
      <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none"
        style={{ background: `${project.accent}20` }} />

      <div className="flex items-start justify-between mb-5">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono tracking-wider mb-3 border"
            style={{ color: project.accent, borderColor: `${project.accent}33`, backgroundColor: `${project.accent}11` }}>
            {project.tag}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">{project.title}</h3>
        </div>
        <span className="text-xs font-mono text-muted shrink-0 ml-4 pt-1">{project.year}</span>
      </div>

      <p className="text-muted-2 text-sm leading-relaxed mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="px-2.5 py-1 text-xs font-mono bg-surface-2 text-muted-2 rounded-md border border-white/5">{t}</span>
        ))}
      </div>

      <a href={project.href} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all duration-300"
        style={{ color: project.accent }}>
        <span>View on GitHub</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative bg-bg py-24 sm:py-32 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <motion.div ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16">
          <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-4">Selected Work</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">POCs &amp; Projects</h2>
          <p className="mt-4 text-muted-2 text-base max-w-xl leading-relaxed">
            Practical open-source implementations spanning enterprise integration, event streaming, and cloud-native architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }} className="mt-14 text-center">
          <a href="https://github.com/kodtodya?tab=repositories" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 glass-card rounded-full text-sm font-mono text-muted-2 hover:text-accent hover:border-accent/30 transition-all duration-300">
            <span>View all repositories on GitHub</span>
            <span>↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
