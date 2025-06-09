import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="#" className="social-link">🐙</a>
          <a href="#" className="social-link">💼</a>
          <a href="#" className="social-link">📧</a>
          <a href="#" className="social-link">🐦</a>
        </div>
        <p>&copy; 2025 John Developer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
