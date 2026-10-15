import React from "react";
import { Link } from 'react-router-dom';
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import StraightLoop from '../components/StraightLoop';
import { HiOutlineHandRaised } from "react-icons/hi2";
import '../styles/Hero.css';

const socialLinks = [
  { name: 'LINKEDIN', href: 'https://www.linkedin.com/in/hoyitsowen/', Icon: FiLinkedin },
  { name: 'GITHUB', href: 'https://github.com/hoyitsowen', Icon: FiGithub },
  { name: 'INSTAGRAM', href: 'https://www.instagram.com/hoyitsowen/', Icon: FiInstagram },
  { name: 'GMAIL', href: 'mailto:owen.trinidad23@gmail.com', Icon: FiMail },
];

const Hero = () => {
  return (
    <section className="relative site-hero bg-white dark:bg-[#141414]">
      <div className="mx-auto max-w-7xl px-6 md:px-16 pt-10 lg:px-8">

        {/* Top intro */}
        <p className="mt-8 mb-6 flex items-center gap-2 text-base text-muted font-sans">
          <HiOutlineHandRaised className="text-2xl text-accent wave" /> Hey! It’s me, Owen.
        </p>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

          {/* LEFT – Headline */}
          <div className="lg:col-span-8">
            <h1 className="text-balance text-5xl font-medium font-clash leading-tight sm:text-6xl xl:text-7xl text-black dark:text-white">
              Building{" "}
              <span className="text-accent">
                meaningful digital experiences
              </span>{" "}
              that people love to use.
            </h1>
          </div>

          {/* RIGHT – Supporting text */}
          <div className="lg:col-span-4 flex flex-col justify-end font-sans">
            <p className="text-sm leading-relaxed text-muted">
              I design and develop clean, user-focused web experiences by
              blending thoughtful design—always aiming
              for clarity, performance, and impact.
            </p>

          <Link
            to="/about"
            className="group relative mt-6 inline-flex w-fit overflow-hidden rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-black transition hover:border-black dark:border-gray-600 dark:text-white dark:hover:border-gray-400"
          >
            <span className="block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
              Know me better →
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              About Me
            </span>
          </Link>
          </div>
        </div>

        {/* Bottom links */}
        <div className="mt-20 relative flex gap-6 text-sm text-gray-400 dark:text-gray-600 font-sans">
          <div className="absolute -top-4 left-0 w-1/2 border-t border-gray-700"></div>
          {socialLinks.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              className="inline-flex items-center gap-2 hover:text-lime-600 dark:hover:text-lime-400"
              aria-label={name}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <Icon className="text-base" />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </div>
      
      <div className="mt-20">
        <StraightLoop
          text="Design ✦ Build ✦ Deliver ✦ User Interfaces ✦ Experiences ✦ Development ✦ Solutions ✦"
          speed={0.8}
          className="text-[6rem] font-medium uppercase text-black dark:text-white"
        />
      </div>
    </section>
  );
};

export default Hero;
