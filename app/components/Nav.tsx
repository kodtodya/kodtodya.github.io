'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prevScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 50);
      // Hide on scroll down, show on scroll up
      setHidden(current > prevScrollY.current && current > 100);
      prevScrollY.current = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: hidden ? -80 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/80 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center font-black text-bg text-sm shadow-[0_0_20px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300">
              AL
            </div>
            <span className="font-mono text-xs text-muted group-hover:text-accent transition-colors tracking-widest">
              &lt;/Avadhut&gt;
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-2 hover:text-accent transition-colors text-sm font-medium tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="https://github.com/kodtodya"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 glass-card rounded-full text-xs font-mono text-accent hover:border-accent/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300"
            >
              GitHub ↗
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <span className={`w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-black text-white hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://github.com/kodtodya"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-accent font-mono text-sm"
            >
              github.com/kodtodya ↗
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
