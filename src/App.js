import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import PillNav from './components/PillNav';
import logo from './assets/logo.svg';

function App() {
  return (
    <Router>
      <>
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Contact', href: '/contact' }
          ]}
          activeHref="/"
          className="custom-nav center-horizontal"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Footer />
        <ScrollToTop />
      </>
    </Router>
  );
}

export default App;
