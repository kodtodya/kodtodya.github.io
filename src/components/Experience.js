import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.css';

const JOBS = [
  {
    period: 'Nov 2023 — Present',
    role: 'Principal Consultant',
    company: 'OptiValueTek Consulting',
    current: true,
    tags: ['AI RAG', 'Java', 'Spring Boot', 'GoLang', 'Apache Camel', 'Kafka', 'OpenShift'],
    desc: 'Leading AI RAG development, middleware integration development, architecture reviews, and consulting for clients. Designing and implementing event-driven microservice architectures.',
  },
  {
    period: 'Mar 2020 — Now 2023',
    role: 'Sr. Integration Developer',
    company: 'Patona Technologies Ltd',
    current: false,
    tags: ['Apache Camel', 'Kafka', 'Red Hat Fuse', 'OpenShift'],
    desc: 'Leading middleware integration development, architecture reviews, and consulting for enterprise clients. Designing event-driven microservice architectures using Apache Camel routes, Red Hat OpenShift, and Apache Kafka.',
  },
  {
    period: 'May 2018 — Feb 2020',
    role: 'Officer / Manager',
    company: 'Citicorp Services India Private Limited',
    current: false,
    tags: ['Java', 'Middleware', 'CMMI-5', 'Spring'],
    desc: 'Managed and developed Java & middleware integration applications for financial services infrastructure. Operated in a CMMI-5 certified process environment with strict quality standards.',
  },
  {
    period: 'Jun 2016 — May 2018',
    role: 'Software Maintenance Engineer',
    company: 'Red Hat Inc',
    current: false,
    tags: ['JBoss Fuse', 'JBoss EAP', 'A-MQ', 'OSS Support'],
    desc: 'Provided expert software maintenance support for Red Hat JBoss middleware products. Worked directly with enterprise clients globally to resolve complex integration issues, filed upstream fixes, and contributed to product quality.',
  },
  {
    period: 'Jan 2015 — May 2016',
    role: 'Senior Applications Developer',
    company: 'BNY Mellon Technologies',
    current: false,
    tags: ['Java', 'Spring', 'Design Patterns', 'Finance'],
    desc: 'Developed and enhanced Java-based financial applications and middleware integrations. Led implementation of design patterns to improve code reusability and maintained high code quality standards.',
  },
  {
    period: 'Sep 2011 — Dec 2014',
    role: 'Senior Software Engineer',
    company: 'IGATE Global Solutions Limited',
    current: false,
    tags: ['Core Java', 'Integration', 'Enterprise'],
    desc: 'Built enterprise Java applications and integration solutions across multiple client engagements. Established a strong foundation in open-source middleware technologies and enterprise integration patterns.',
  },
];

export default function Experience() {
  useScrollReveal();
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" className="section-wrap">
      <div className="section-label">Experience</div>
      <h2 className="section-title reveal">Career Chronicle</h2>
      <p className="section-subtitle reveal d1">
        14+ years across financial services, enterprise software, and open-source middleware.
      </p>

      <div className="exp-list">
        {JOBS.map((job, i) => (
          <div
            key={i}
            className={`exp-item reveal d${Math.min(i + 1, 4)} ${expanded === i ? 'exp-item--open' : ''}`}
            onClick={() => setExpanded(expanded === i ? -1 : i)}
          >
            <div className="exp-header">
              <div className="exp-left">
                <div className="exp-dot-col">
                  <div className={`exp-dot${job.current ? ' exp-dot--current' : ''}`} />
                  {i < JOBS.length - 1 && <div className="exp-line" />}
                </div>
                <div className="exp-meta">
                  <div className="exp-role">{job.role}</div>
                  <div className="exp-company">{job.company}</div>
                </div>
              </div>
              <div className="exp-right">
                <div className="exp-period">{job.period}</div>
                {job.current && <span className="exp-badge">Current</span>}
                <svg className="exp-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>
            </div>

            {expanded === i && (
              <div className="exp-body">
                <p className="exp-desc">{job.desc}</p>
                <div className="exp-tags">
                  {job.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
