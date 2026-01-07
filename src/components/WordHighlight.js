import React, { useEffect, useRef } from 'react';
import '../styles/WordHighlight.css';

export default function WordHighlight({ children, stagger = 60, threshold = 0.15, rootMargin = '0px' }) {
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // animate in — staggered
            wordRefs.current.forEach((w, i) => {
              if (!w) return;
              const t = setTimeout(() => w.classList.add('highlighted'), i * stagger);
              timeoutsRef.current.push(t);
            });
          } else {
            // remove highlights and clear pending timeouts
            wordRefs.current.forEach((w) => w && w.classList.remove('highlighted'));
            timeoutsRef.current.forEach((t) => clearTimeout(t));
            timeoutsRef.current = [];
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      timeoutsRef.current.forEach((t) => clearTimeout(t));
    };
  }, [stagger, threshold, rootMargin]);

  const text = String(children);
  const tokens = text.split(/(\s+)/); // keep spaces as tokens

  return (
    <span ref={containerRef} className="word-highlight-container" aria-hidden="false">
      {tokens.map((tok, idx) => {
        if (/\s+/.test(tok)) {
          return <span key={idx}>{tok}</span>;
        }
        return (
          <span
            key={idx}
            className="wh-word"
            ref={(el) => {
              wordRefs.current[idx] = el;
            }}
          >
            {tok}
          </span>
        );
      })}
    </span>
  );
}
