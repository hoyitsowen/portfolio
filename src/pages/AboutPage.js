import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Briefcase, Cpu, MousePointer2 } from 'lucide-react';
import Lanyard from '../components/Lanyard';
import Footer from '../pages/Footer';

const AboutPage = () => {
  // Data for the sections
  const skills = ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion", "Three.js", "Node", "Figma"];
  
  const experiences = [
    { role: "SAP BTP Integration Intern", 
      company: "Accenture", 
      year: "Jan 2026 — May 2026", 
      points: [
        "Selected as one of the internship delegates for Accenture’s SAP BTP Integration program, completing intensive technical training in enterprise integration technologies.",
        "Executed hands-on SAP Process Integration and SAP BTP Integration Suite exercises, strengthening practical skills in system connectivity and integration workflows.",
        "Applied SAP Business Suite and BTP concepts in simulated business scenarios, improving understanding of enterprise application integration and automation.",
        "Collaborated in technical learning activities and guided exercises, enhancing problem-solving and SAP development competencies in cloud-based environments.",
      ] },
  ];

  const awards = [
    { title: "Foundations of User Experience (UX) Design", issuer: "Google", year: "2025", link: "https://coursera.org/share/f08c40bcd881965b89de73eaeb57e70c" },
    { title: "First Term Dean's List", issuer: "University of Santo Tomas", year: "2022", link: "#" },
  ];

  // Framer Motion Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white dark:bg-[#141414] text-black dark:text-white transition-colors duration-500 font-sans selection:bg-lime-400 selection:text-black">
      
      {/* 1. HERO SECTION: Balanced & Interactive */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-16 overflow-hidden">
        {/* Subtle Lanyard integration for depth */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block opacity-80 pointer-events-none">
          <Lanyard position={[0, 0, 15]} gravity={[0, -30, 0]} />
        </div>

        <div className="max-w-4xl relative z-10">
          <motion.div {...fadeInUp} className="flex items-center gap-2 mb-6">
            <span className="w-8 h-[1px] bg-lime-500"></span>
            <p className="text-xs font-bold uppercase tracking-widest text-lime-600 dark:text-lime-400">Available for Freelance</p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-medium font-clash dark:text-white leading-[0.95] mb-8"
          >
            Digital products <br />
            <span className="text-gray-400 dark:text-gray-600">with a soul.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed mb-10"
          >
            I’m a UI/UX Frontend Developer hybrid who loves turning complex problems into 
            simple, beautiful, and accessible digital experiences.
          </motion.p>

          <div className="flex gap-4">
             <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
                My Resume <ExternalLink size={18} />
             </button>
          </div>
        </div>
      </section>

      {/* 2. TECH MARQUEE: Smooth Scroller */}
      <div className="py-8 border-y border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/0 overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap items-center"
        >
          {[...skills, ...skills].map((skill, i) => (
            <div key={i} className="flex items-center gap-4 text-2xl font-clash font-medium opacity-30 hover:opacity-100 transition-opacity cursor-default">
              <span>{skill}</span>
              <Cpu size={20} className="text-lime-500" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- 3. EXPERIENCE & AWARDS SECTION --- */}
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-start">

        {/* Left Column: Experience */}
        <div className="flex flex-col">
          {/* Header aligned with right side */}
          <div className="flex items-center gap-4 mb-12 h-[60px]">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
              <Briefcase size={22} />
            </div>
            <h2 className="text-3xl font-bold font-clash dark:text-white leading-none">Experience</h2>
          </div>

          {/* Experience List - Removed space-y to control first item alignment */}
          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <motion.div 
                {...fadeInUp} 
                key={i} 
                className={`relative pl-8 border-l border-gray-200 dark:border-white/10 ${i !== 0 ? 'mt-10' : ''}`}
              >
                {/* Timeline Dot: Positioned exactly at the top of the first line */}
                <div className="absolute -left-[5px] top-[6px] w-2.5 h-2.5 rounded-full bg-lime-500 shadow-[0_0_10px_rgba(132,204,22,0.5)]" />
                
                <span className="text-sm font-mono text-gray-500 mb-2 block leading-none">
                  {exp.year}
                </span>
                
                <h3 className="text-xl font-bold dark:text-white mb-1">{exp.role}</h3>
                <p className="text-lime-600 dark:text-lime-400 font-medium mb-6">{exp.company}</p>
                
                {/* Bullet Points - Removed {exp.desc} to fix the gap */}
                <ul className="space-y-4">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                      <span className="text-lime-500 mt-1.5 flex-shrink-0 text-[10px]">●</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Awards */}
        <div className="flex flex-col">
          {/* Header aligned with left side */}
          <div className="flex items-center gap-4 mb-12 h-[60px]">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
              <Award size={22} />
            </div>
            <h2 className="text-3xl font-bold font-clash dark:text-white leading-none">Awards & Certifications</h2>
          </div>

          {/* Awards Grid - Matches the top starting point of Experience */}
          <div className="grid gap-4">
            {awards.map((award, i) => (
              <motion.a 
                href={award.link}
                key={i}
                whileHover={{ x: 10 }}
                className="flex items-center justify-between p-7 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent hover:border-lime-500/30 transition-all group"
              >
                <div className="space-y-1">
                  <h4 className="text-lg font-bold dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                    {award.title}
                  </h4>
                  <p className="text-sm text-gray-500">{award.issuer} • {award.year}</p>
                </div>
                <ExternalLink size={18} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>

      <Footer />
    </div>
  );
};

export default AboutPage;