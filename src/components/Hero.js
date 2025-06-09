import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text animate-fade-in">
            <h1>John Developer</h1>
            <h2>Full Stack Developer & UI/UX Designer</h2>
            <p>
              Passionate about creating beautiful, functional, and user-centered digital experiences. I combine technical expertise with creative design to build amazing web applications.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">View My Work →</a>
              <a href="#" className="btn-secondary">📄 Download CV</a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces"
              alt="Profile"
              className="profile-pic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
