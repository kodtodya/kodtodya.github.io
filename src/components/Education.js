import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';

const EDU = [
  {
    icon: '🎓',
    degree: 'Masters in Computer Applications',
    spec: 'Science',
    school: 'Sangola College, Solapur University',
    period: '2011 – 2015',
    result: '70.00%',
    highlight: null,
  },
  {
    icon: '🎓',
    degree: 'Bachelor in Computer Applications',
    spec: 'Commerce',
    school: 'Sangola College, Solapur University',
    period: '2008 – 2011',
    result: '76.67%',
    highlight: 'University Rank Holder',
  },
  {
    icon: '📜',
    degree: 'Higher Secondary Certificate (HSC)',
    spec: 'Commerce',
    school: 'Vidya Mandir Junior College, Sangola',
    period: '2007 – 2008',
    result: '78.17%',
    highlight: null,
  },
  {
    icon: '🏫',
    degree: 'Secondary School Certificate (SSC)',
    spec: null,
    school: 'Shri. Sitaram Maharaj Vidyalaya, Khardi',
    period: '2005 – 2006',
    result: '70.40%',
    highlight: null,
  },
];

export default function Education() {
  useScrollReveal();
  return (
    <section id="education" className="section-wrap">
      <div className="section-label">Education</div>
      <h2 className="section-title reveal">Academic Journey</h2>
      <p className="section-subtitle reveal d1">
        Built a strong computer science foundation while simultaneously growing a professional career.
      </p>

      <div className="edu-grid">
        {EDU.map((e, i) => (
          <div key={e.degree} className={`card card--lift reveal d${i + 1}`}>
            <div className="edu-icon">{e.icon}</div>
            <div className="edu-degree">{e.degree}</div>
            {e.spec && <div className="edu-spec">Specialization: {e.spec}</div>}
            <div className="edu-school">{e.school}</div>
            <div className="edu-footer">
              <span className="edu-period">{e.period}</span>
              <span className="edu-result">{e.result}</span>
              {e.highlight && <span className="edu-highlight">{e.highlight}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
