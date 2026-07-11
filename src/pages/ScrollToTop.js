import React, { useEffect } from 'react';
import '../styles/ScrollToTop.css';
import { FaChevronUp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Immediately jump to top on route change to avoid preserving scroll position
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      // also set documentElement/body for some browsers
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    } catch (e) {
      // fallback
      window.scrollTo(0, 0);
    }
  }, [location]);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scroll-top" onClick={scrollUp}>
      <FaChevronUp />
    </div>
  );
};

export default ScrollToTop;
