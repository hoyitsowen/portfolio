import React from 'react';
import '../styles/ScrollToTop.css';

const ScrollToTop = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scroll-top" onClick={scrollUp}>
      ↑
    </div>
  );
};

export default ScrollToTop;
