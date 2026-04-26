import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Blog from './components/Blog';
import HireMe from './components/HireMe';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import './App.css';

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') setDark(false);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className={`app${dark ? ' dark' : ''}`}>
      <ScrollProgress />
      <Nav dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Blog />
        <HireMe />
      </main>
      <Footer />
    </div>
  );
}
