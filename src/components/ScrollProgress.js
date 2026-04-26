import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const fn = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setW(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, height: '2px',
      width: `${w}%`, background: 'var(--accent)',
      zIndex: 9999, transition: 'width .1s linear',
      borderRadius: '0 2px 2px 0',
    }} />
  );
}
