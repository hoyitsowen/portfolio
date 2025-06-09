import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.</p>
          <div className="contact-buttons">
            <a href="mailto:john@example.com" className="btn-primary">📧 Get In Touch</a>
            <a href="#" className="btn-secondary">📄 Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
