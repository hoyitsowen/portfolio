// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[rgba(10,30,60,0.95)] backdrop-blur z-50 py-5 border-b border-blue-200/20">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Portfolio</div>
        <div className="flex items-center gap-6">
          <a href="#about" className="text-sky-100 px-4 py-2 rounded-full transition-colors hover:bg-[rgba(33,150,243,0.18)] hover:text-blue-500">About</a>
          <a href="#skills" className="text-sky-100 px-4 py-2 rounded-full transition-colors hover:bg-[rgba(33,150,243,0.18)] hover:text-blue-500">Skills</a>
          <a href="#projects" className="text-sky-100 px-4 py-2 rounded-full transition-colors hover:bg-[rgba(33,150,243,0.18)] hover:text-blue-500">Projects</a>
          <a href="#contact" className="text-sky-100 px-4 py-2 rounded-full transition-colors hover:bg-[rgba(33,150,243,0.18)] hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
