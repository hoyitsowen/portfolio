import React from "react";
import { FiLinkedin, FiGithub, FiInstagram, FiMail } from "react-icons/fi";
import { SlSocialBehance } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="max-screen relative w-full px-6 py-20 bg-white dark:bg-[#141414]">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[24px] bg-white dark:bg-[#18181A] px-6 py-16 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:px-10">
          {/* Badge */}
          <div className="mx-auto mb-8 flex w-fit items-baseline gap-2 rounded-full bg-green-100/60 dark:bg-[#B5FF6D]/10 px-4 py-2">
            <span className="relative flex h-[8px] w-[8px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-40" />
              <span className="relative inline-flex h-full w-full rounded-full bg-green-300" />
            </span>
            <span className="text-xs font-medium font-sans text-gray-700 dark:text-white">Available for work</span>
          </div>

          {/* Title */}
          <h2 className="mx-auto max-w-3xl text-center text-4xl text-black dark:text-white font-medium leading-tight tracking-tight sm:text-5xl">
            Let&apos;s create your <br className="hidden sm:block" />
            next big idea.
          </h2>

          {/* Button */}
          <div className="flex justify-center font-sans">
        <button className="group relative mt-6 w-fit overflow-hidden rounded-full border border-gray-600 px-6 py-3 text-sm font-medium text-black dark:text-white transition hover:border-white">
          <span className="block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
            Contact Me
          </span>
          <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Contact Me
          </span>
        </button>
      </div>
        </div>

        {/* Footer bottom row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 font-sans text-sm text-black dark:text-gray-400 sm:flex-row">
          <p className="text-black dark:text-gray-400">© {new Date().getFullYear()} Owen Trinidad. All rights reserved.</p>

          <div className="flex items-center opacity-cintainer text-text-secondary gap-6">
            <a className="hover:text-gray-300" href="https://www.linkedin.com/in/hoyitsowen/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FiLinkedin className="text-xl"/>
            </a>
            <a className="hover:text-gray-300" href="https://github.com/hoyitsowen" aria-label="GitHub">
              <FiGithub className="text-xl"/>
            </a>
            <a className="hover:text-gray-300" href="https://www.instagram.com/hoyitsowen/" aria-label="Instagram">
              <FiInstagram className="text-xl"/>
            </a>
            <a className="hover:text-gray-300" href="mailto:owen.trinidad23@gmail.com" aria-label="Email">
              <FiMail className="text-xl"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
