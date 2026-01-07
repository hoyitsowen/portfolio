import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB...',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates...',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop',
    tech: ['React', 'Firebase', 'Material-UI', 'Socket.io']
  },
  {
    title: 'AI Analytics Dashboard',
    description: 'A responsive analytics dashboard with AI-powered insights...',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
    tech: ['React', 'D3.js', 'Python', 'FastAPI']
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <p className="text-sm uppercase tracking-widest text-accent font-clash">
          My Work
        </p>
        <h2>Selected Projects</h2>
        <p className="text-balance">Here's a curated selection showcasing my expertise and the achieved results.</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span className="tech-tag" key={i}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">🔍 Demo</a>
                  <a href="#" className="project-link">📁 Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
