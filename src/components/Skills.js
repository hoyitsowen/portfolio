import React from 'react';
import '../styles/Skills.css';

const skills = [
  ['React/Next.js', 95],
  ['JavaScript/TypeScript', 90],
  ['Node.js/Express', 85],
  ['Python/Django', 80],
  ['UI/UX Design', 75],
  ['Database Management', 80]
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map(([name, percent], index) => (
            <div className="skill-item" key={index}>
              <div className="skill-header">
                <span className="skill-name">{name}</span>
                <span className="skill-percent">{percent}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${percent}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
