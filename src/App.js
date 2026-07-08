import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';
import AboutPage from './pages/AboutPage';
import Skills from './pages/Skills';
import Testimonials from './pages/Testimonials';
import Projects from './pages/Projects';
import ContactPage from './pages/ContactPage';
import Footer from './pages/Footer';
import ScrollToTop from './pages/ScrollToTop';
import './App.css';
import PillNav from './components/PillNav';
import logo from './assets/logo.svg';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
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
        activeHref={location.pathname}
        className="custom-nav center-horizontal"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Testimonials />
            <Footer />
          </>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<div>Services Page Coming Soon</div>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
