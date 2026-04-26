import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="footer-logo-badge">AL</span>
            <span className="footer-logo-text">Avadhut Lele</span>
          </div>
          <p className="footer-tagline">Solutions Architect · Middleware Integration · Open Source</p>
        </div>

        <div className="footer-links">
          <a href="https://github.com/kodtodya" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://kodtodya.github.io" target="_blank" rel="noreferrer">Portfolio</a>
          <a href="#hire">Contact</a>
        </div>

        <p className="footer-copy">© {new Date().getFullYear()} Avadhut Lele · Made with ☕ in Pune, India</p>
      </div>
    </footer>
  );
}
