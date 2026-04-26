import { useEffect } from 'react';

export function useScrollReveal(selector = '.reveal') {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    const els = document.querySelectorAll(selector);
    els.forEach(el => obs.observe(el));
    return () => els.forEach(el => obs.unobserve(el));
  });
}
