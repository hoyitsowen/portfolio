import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './pages/Hero';
import About from './pages/About';
import AboutPage from './pages/AboutPage';
import Skills from './pages/Skills';
import Testimonials from './pages/Testimonials';
import Projects from './pages/Projects';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Footer from './pages/Footer';
import ScrollToTop from './pages/ScrollToTop';
import './App.css';
import PillNav from './components/PillNav';
import logo from './assets/logo.png';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            // keep visible once revealed - comment next line if you want toggle behavior
            // entry.target.classList.remove('is-visible');
          }
        });
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    const els = Array.from(document.querySelectorAll('section, [data-reveal], .reveal, .fade-in'));
    els.forEach((el) => {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <div className="selection:bg-lime-400 selection:text-black">
      <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Projects', href: '/projects' },
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
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                className="page-motion"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.35 } }}
              >
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Testimonials />
                <Footer />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                className="page-motion"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
                exit={{ opacity: 0, y: -8, transition: { duration: 0.35 } }}
              >
                <AboutPage />
              </motion.div>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.div
                className="page-motion"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
                exit={{ opacity: 0, y: -8, transition: { duration: 0.35 } }}
              >
                <ProjectsPage />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                className="page-motion"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
                exit={{ opacity: 0, y: -8, transition: { duration: 0.35 } }}
              >
                <ContactPage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <ScrollToTop />
      </div>
    </>
  );
}

export default App;
