import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>I'm a passionate full-stack developer with 5+ years of experience creating digital solutions that make a difference.</p>
            <p>When I'm not coding, you can find me exploring new technologies or sharing knowledge with the community.</p>
            <p>🌍 New York, NY</p>
            <p>📧 john@example.com</p>
            <p>📱 +1 (555) 123-4567</p>
          </div>
          <div className="stats-grid">
            {[
              ['50+', 'Projects Completed'],
              ['5+', 'Years Experience'],
              ['30+', 'Happy Clients'],
              ['15+', 'Technologies']
            ].map(([number, label], i) => (
              <div className="stat-card" key={i}>
                <div className="stat-number">{number}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
