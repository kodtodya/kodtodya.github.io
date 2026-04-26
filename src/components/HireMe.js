import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './HireMe.css';

const OFFERINGS = [
  { icon: '🏗️', title: 'Architecture Consulting', desc: 'Design and review of middleware integration systems, microservices topologies, and cloud-native patterns.' },
  { icon: '🔧', title: 'Integration Development',  desc: 'Full-cycle development with Apache Camel, Kafka, Spring Boot, and Red Hat Fuse enterprise platforms.' },
  { icon: '📡', title: 'Technical Training',        desc: 'Corporate training on open-source middleware, integration frameworks, and OSS best practices.' },
  { icon: '☁️', title: 'Cloud Migration',           desc: 'Re-architecture of legacy systems to OpenShift, Kubernetes, and cloud-native containerized platforms.' },
];

const EMPTY = { name: '', email: '', company: '', type: 'Architecture Consulting', message: '' };

export default function HireMe() {
  useScrollReveal();
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSent(true);

    try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        access_key: "ba3a1c7f-525e-4b44-8ada-85f1e7219c5f",
        ...form
      })
    });

    const data = await res.json();

    if (data.success) {
      setSent(true);
      setForm(EMPTY);
    } else {
      alert("Failed to send message");
    }
  } catch (err) {
    alert("Something went wrong");
  }
  setTimeout(() => { setSent(false); setForm(EMPTY); }, 4000);
  };

  return (
    <section id="hire" className="hire-section">
      <div className="section-wrap">
        <div className="section-label">Contact</div>
        <h2 className="section-title reveal">Want to Hire Me?</h2>
        <p className="section-subtitle reveal d1">
          Open to consulting engagements, full-time roles, and technical training opportunities.
          Let's build something resilient together.
        </p>

        {/* Status banner */}
        <div className="hire-status-banner reveal d2">
          <span className="hire-status-dot" />
          <span><strong>Currently available</strong> for new opportunities — consulting and full-time roles</span>
        </div>

        {/* Offerings */}
        <div className="hire-offerings reveal d2">
          {OFFERINGS.map(o => (
            <div key={o.title} className="offer-item card">
              <span className="offer-icon">{o.icon}</span>
              <div>
                <div className="offer-title">{o.title}</div>
                <div className="offer-desc">{o.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="hire-form-wrap card reveal d3">
          <h3 className="form-heading">Send a Message</h3>

          {sent ? (
            <div className="form-success">
              <div className="form-success-icon">✓</div>
              <p><strong>Message sent!</strong> I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="hire-form" onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="access_key" value="ba3a1c7f-525e-4b44-8ada-85f1e7219c5f"/>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Jane Smith" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" placeholder="Your organisation" value={form.company} onChange={handleChange} />
                </div>
                <div className="form-field">
                  <label htmlFor="type">Engagement</label>
                  <select id="type" name="type" value={form.type} onChange={handleChange}>
                    <option>Architecture Consulting</option>
                    <option>Integration Development</option>
                    <option>Corporate Training</option>
                    <option>Cloud Migration</option>
                    <option>Full-time Role</option>
                    <option>Open Source Collaboration</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your project or opportunity..." value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="form-submit">Send Message →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
