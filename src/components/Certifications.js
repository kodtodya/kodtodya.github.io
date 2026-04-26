import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Certifications.css';

const CERTS = [
  {
    icon: '☁️',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: '2026',
    url: null,
  },
  {
    icon: '☕',
    title: 'Oracle Certified Professional, Java SE 11 Developer',
    issuer: 'Oracle',
    date: '2019',
    url: null,
  },
  {
    icon: '🏆',
    title: 'Certified Apache Camel Developer',
    issuer: 'Open Logic',
    date: '2019',
    url: null,
  },
];

export default function Certifications() {
  useScrollReveal();
  return (
    <section id="certifications" className="section-wrap">
      <div className="section-label">Certifications</div>
      <h2 className="section-title reveal">Professional Certifications</h2>
      <p className="section-subtitle reveal d1">
        Continuous learning and industry-recognized validations of expertise.
      </p>

      <div className="cert-grid">
        {CERTS.map((c, i) => (
          <div key={c.title} className={`card card--lift reveal d${i + 1}`}>
            <div className="cert-icon">{c.icon}</div>
            <div className="cert-title">{c.title}</div>
            <div className="cert-issuer">{c.issuer}</div>
            <div className="cert-footer">
              <span className="cert-date">{c.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
