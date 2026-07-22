import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Award, Briefcase, Cpu, GraduationCap, ChevronDown,
  Brain, PenTool, Figma, Code 
} from 'lucide-react';
import Footer from '../pages/Footer';

const AboutPage = () => {
  const skills = ["React", "JavaScript", "PHP", "TailwindCSS", "Framer Motion", "Photoshop", "Premiere Pro", "Figma", "Node"];
  
  const experiences = [
    { 
      id: 1, 
      role: "SAP BTP Integration Intern", 
      company: "Accenture", 
      year: "Jan 2026 — May 2026", 
      points: [
        "Executed hands-on SAP Process Integration and SAP BTP Integration Suite exercises, strengthening practical skills in system connectivity and integration workflows.",
        "Applied SAP Business Suite and BTP concepts in simulated business scenarios, improving understanding of enterprise application integration and automation.",
        "Designed, deployed, and monitored integration flows (iFlows), applying message mapping and transformation techniques to ensure accurate system-to-system communication.",
        "Collaborated in technical learning activities and guided exercises, enhancing problem-solving and SAP development competencies in cloud-based environments.",
      ] 
    },
    // Add additional experience objects here to fill the list
  ];

  const education = {
    degree: "Bachelor of Science in Information Technology",
    school: "University of Santo Tomas",
    specilization: "Specialization in Web and Mobile Application Development",
    year: "Aug 2022 — Jun 2026"
  };

  const awards = [
    { title: "Foundations of User Experience (UX) Design", issuer: "Google", year: "2025", link: "https://coursera.org/share/f08c40bcd881965b89de73eaeb57e70c" },
    { title: "First Term Dean's List", issuer: "University of Santo Tomas", year: "2022", link: "#" },
  ];

  const designProcess = [
    { step: "01", title: "Strategize", icon: Brain, desc: "Deep dive into research, requirements gathering, and mapping user goals." },
    { step: "02", title: "Wireframe", icon: PenTool, desc: "Structuring user flows and mapping out low-fidelity blueprints to establish clean layout hierarchies." },
    { step: "03", title: "Design", icon: Figma, desc: "Designing responsive, premium digital interfaces utilizing scalable Figma component libraries." },
    { step: "04", title: "Development", icon: Code, desc: "Coding scalable frontend architectures with clean, modern, and performant web technologies." }
  ];

  const [expandedId, setExpandedId] = useState(1);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white dark:bg-[#141414] text-black dark:text-white transition-colors duration-500 font-sans selection:bg-lime-400 selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden px-4 py-16 sm:px-6 md:px-16 md:py-20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="relative z-10 text-center lg:text-left">
            <motion.div {...fadeInUp} className="mb-5 flex items-center justify-center gap-2 lg:justify-start">
              <span className="h-[1px] w-8 bg-lime-500"></span>
              <p className="text-xs font-bold uppercase tracking-widest text-lime-600 dark:text-lime-400">Available for Work</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-6 font-clash text-5xl font-medium leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl dark:text-white"
            >
              Owen <br />
              <span className="text-gray-400 dark:text-gray-600">Trinidad</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl dark:text-gray-400 lg:mx-0"
            >
              Based in Manila, Philippines, I design and build intuitive digital experiences through a blend of UI/UX design and front-end development.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="/Michael Owen Trinidad - Resume.pdf"
                download="Michael Owen Trinidad - Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white transition-transform hover:scale-105 dark:bg-white dark:text-black sm:px-6 sm:text-base"
              >
                My Resume
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="group relative mx-auto w-full max-w-[320px] pt-4 sm:max-w-[360px] sm:pt-6 lg:max-w-[420px] lg:pt-12 [perspective:1000px]"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-lime-400/30 via-transparent to-slate-500/20 blur-3xl" />
            
            {/* 3D Flip Container */}
            <div className="relative w-full h-[296px] sm:h-[384px] lg:h-[504px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              {/* Front Face (Grad Pic) */}
              <div className="absolute inset-0 h-full w-full overflow-hidden rounded-[2rem] border border-gray-200 bg-white/80 p-2 shadow-[0_25px_90px_rgba(15,23,42,0.12)] backdrop-blur [backface-visibility:hidden] dark:border-white/10 dark:bg-[#171717]/80 sm:p-3">
                <div className="absolute z-10 left-4 top-4 rounded-full border border-white/30 bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-gray-700 backdrop-blur dark:border-white/10 dark:bg-black/40 dark:text-gray-200 sm:left-6 sm:top-6">
                  Profile
                </div>
                <img
                  src="/grad-pic-icon.jpg"
                  alt="Michael Owen Trinidad"
                  className="h-full w-full rounded-[1.4rem] object-cover object-center"
                />
              </div>

              {/* Back Face (Avatar Logo) */}
              <div className="absolute inset-0 h-full w-full overflow-hidden rounded-[2rem] border border-gray-200 bg-white/80 p-2 shadow-[0_25px_90px_rgba(15,23,42,0.12)] backdrop-blur [transform:rotateY(180deg)] [backface-visibility:hidden] dark:border-white/10 dark:bg-[#171717]/80 sm:p-3">
                <div className="absolute z-10 left-4 top-4 rounded-full border border-white/30 bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-gray-700 backdrop-blur dark:border-white/10 dark:bg-black/40 dark:text-gray-200 sm:left-6 sm:top-6">
                  Avatar
                </div>
                {/* Avatar Background Container */}
                <div className="flex h-full w-full items-center justify-center rounded-[1.4rem] bg-gray-50 dark:bg-[#121212]">
                  {/* IMPORTANT: Update the src below to match your actual avatar logo file path */}
                  <img
                    src="/owen-avatar-logo.png" 
                    alt="Owen's Avatar Logo"
                    className="h-full w-full p-4 object-contain"
                  />
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TECH MARQUEE */}
      <div className="overflow-hidden border-y border-gray-100 bg-gray-50/50 py-8 dark:border-white/5 dark:bg-white/0">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap items-center max-w-6xl mx-auto"
        >
          {[...skills, ...skills].map((skill, i) => (
            <div key={i} className="flex items-center gap-4 text-2xl font-clash font-medium opacity-30 hover:opacity-100 transition-opacity cursor-default">
              <span>{skill}</span>
              <Cpu size={20} className="text-lime-500" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- CONTENT WRAPPER --- */}
      <div className="mx-auto max-w-6xl space-y-20 px-4 py-10 sm:px-6 md:px-16 md:py-12 md:space-y-28 lg:space-y-32">

        {/* SECTION 3: EXPERIENCE */}
        <section className="grid md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_2fr] gap-x-12 gap-y-8 items-start">
          {/* Left Side Header Block */}
          <div className="space-y-4 md:sticky md:top-12">
            <div className="flex items-center gap-2 text-lime-600 dark:text-lime-400 font-clash text-xs tracking-widest uppercase">
              <Briefcase size={14} className="text-lime-500" />
              Work History
            </div>
            <h2 className="text-4xl font-bold font-clash dark:text-white tracking-tight">
              Experience
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                A collection of experiences where I've collaborated, learned, and built digital solutions that solve real-world problems.
            </p>
          </div>

          {/* Right Side Experience List */}
          <div className="flex flex-col border-t border-gray-100 dark:border-white/5 w-full">
            {experiences.map((exp, i) => {
              const isExpanded = expandedId === exp.id;

              return (
                <motion.div 
                  {...fadeInUp} 
                  key={exp.id || i} 
                  className="border-b border-gray-100 dark:border-white/5 transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleExpand(exp.id || i)}
                    className="w-full flex items-start justify-between py-6 text-left focus:outline-none group"
                  >
                    <div className="space-y-1.5 pr-4">
                      <h3 className="text-xl font-bold dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-gray-400 font-medium text-sm">
                        @{exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-gray-500 whitespace-nowrap">
                        {exp.year}
                      </span>
                      <div className="p-1 rounded-lg bg-gray-50 dark:bg-white/5 text-gray-400 group-hover:text-lime-500 transition-all">
                        <ChevronDown 
                          size={16} 
                          className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                        />
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="pb-6 space-y-4 pl-1">
                          {exp.points.map((point, idx) => (
                            <li key={idx} className="flex gap-3 text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                              <span className="text-lime-500 mt-1.5 flex-shrink-0 text-[10px]">●</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
            
            {/* Show More Trigger */}
            <div className="text-center pt-6">
              <button disabled className="text-xs tracking-wider disabled:opacity-50 disabled:cursor-not-allowed text-gray-400 dark:text-gray-500 hover:text-lime-500 dark:hover:text-white transition-colors uppercase font-medium">
                Show More
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 4: EDUCATION & CERTIFICATIONS */}
        <section className="grid md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_2fr] gap-x-12 gap-y-8 items-start">
          {/* Left Side Header Block */}
          <div className="space-y-4 md:sticky md:top-12">
            <div className="flex items-center gap-2 text-lime-600 dark:text-lime-400 font-clash text-xs tracking-widest uppercase">
              <GraduationCap size={14} className="text-lime-500" />
              Credentials
            </div>
            <h2 className="text-4xl font-bold font-clash dark:text-white tracking-tight">
              Education & Awards
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Academic background and professional milestones achieved throughout my career.
            </p>
          </div>

          {/* Right Side Education card stacked over Awards Grid */}
          <div className="w-full space-y-8">
            {/* Education box */}
            <motion.div {...fadeInUp} className="p-7 w-full bg-gray-50/50 dark:bg-white/[0.02] rounded-2xl border border-gray-100 dark:border-white/5">
              <p className="text-sm font-mono text-gray-500 mb-2">{education.year}</p>
              <h4 className="text-xl font-bold dark:text-white mb-1">{education.degree}</h4>
              <p className="text-lime-600 dark:text-lime-400 font-medium">{education.school}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{education.specilization}</p>
            </motion.div>

            {/* Awards listing */}
            <div className="grid gap-4 w-full">
              {awards.map((award, i) => (
                <motion.a 
                  href={award.link}
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-6 rounded-2xl bg-gray-50/50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-lime-500/30 transition-all group"
                >
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                      {award.title}
                    </h4>
                    <p className="text-sm text-gray-400 dark:text-gray-500">{award.issuer} • {award.year}</p>
                  </div>
                  <ExternalLink size={16} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: MY DESIGN PROCESS */}
        <section className="grid md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_2fr] gap-x-12 gap-y-8 items-start">
          {/* Left Side Header Block */}
          <div className="space-y-4 md:sticky md:top-12">
            <div className="flex items-center gap-2 text-lime-600 dark:text-lime-400 font-clash text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse"></span>
              How I Work
            </div>
            <h2 className="text-4xl font-bold font-clash dark:text-white tracking-tight">
              My Design Process
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              A structured approach that transforms ideas into intuitive, user-centered digital experiences.
            </p>
          </div>

          {/* Right Side Process Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4 w-full">
            {designProcess.map((proc, i) => {
              const ProcessIcon = proc.icon;
              return (
                <motion.div 
                  {...fadeInUp}
                  key={i} 
                  className="p-6 rounded-2xl bg-gray-50/50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:border-lime-500/20 transition-all duration-300 space-y-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-white/5 rounded-xl text-gray-500 group-hover:text-lime-500 transition-colors">
                    <ProcessIcon size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-lime-600 dark:text-lime-400 font-bold block mb-1">
                      {proc.step}. {proc.title}
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {proc.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;