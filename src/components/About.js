import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const INTERESTS = [
  { icon: '🚀', title: 'Space Exploration',    desc: 'Mars & Lunar missions, Starship engineering' },
  { icon: '💻', title: 'Open Source',           desc: 'Building software that empowers communities' },
  { icon: '🌳', title: 'Nature',                desc: 'Planting trees, giving back to the planet' },
  { icon: '🎓', title: 'Lifelong Learning',     desc: 'Always chasing the next interesting technology' },
];

export default function About() {
  useScrollReveal();
  return (
    <section id="about" className="about-section">
      <div className="section-wrap">
        <div className="section-label">About</div>
        <h2 className="section-title reveal">Hello, I'm Avadhut</h2>
        <div className="about-grid">
          <div className="about-text-col reveal d1">
            <p className="section-subtitle reveal d1" style={{ color: '#ff9933' }}>
              A software developer and proud geek based in Pune — India's most livable city.
            </p>
            <p>
              Welcome to this corner of the world wide web. I believe if we all strive to leave our
              community better than we found it, this world would be a fantastic place to live.
            </p>
            <p>
              Everyday I look for ways to empower people by building software. Early on, I realized
              technology has a significant impact on improving lives. I dove into open-source
              technologies like Java and never stopped learning — simultaneously completing my
              masters while building my professional career.
            </p>
            <p>
              I take pride in architecture review and consultation for various open-source
              technologies, always searching for the latest, most interesting, and most importantly,
              open-source tools to solve real problems.
            </p>

            <div className="about-links">
              <a href="https://github.com/kodtodya" target="_blank" rel="noreferrer" className="about-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <div className="about-interests-col">
            {INTERESTS.map((item, i) => (
              <div key={item.title} className={`about-interest-card card card--lift reveal d${i + 1}`}>
                <span className="ai-icon">{item.icon}</span>
                <div>
                  <div className="ai-title">{item.title}</div>
                  <div className="ai-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
