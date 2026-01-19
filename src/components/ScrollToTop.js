import React from 'react';
import '../styles/ScrollToTop.css';
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
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
