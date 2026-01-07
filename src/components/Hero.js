import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen site-hero">
      <div className="mx-auto max-w-7xl px-6 pt-32 lg:px-8">

        {/* Top intro */}
        <p className="mt-8 mb-6 flex items-center gap-2 text-sm text-muted">
          👋 Hey! It’s me, Owen
        </p>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

          {/* LEFT – Headline */}
          <div className="lg:col-span-8">
            <h1 className="text-balance text-5xl font-extrabold leading-tight sm:text-6xl xl:text-7xl font-clash">
              Building{" "}
              <span className="text-accent">
                meaningful digital experiences
              </span>{" "}
              that people love to use.
            </h1>
          </div>

          {/* RIGHT – Supporting text */}
          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-sm leading-relaxed text-muted">
              I design and develop clean, user-focused web experiences by
              blending thoughtful design—always aiming
              for clarity, performance, and impact.
            </p>

           <button className="group relative mt-6 w-fit overflow-hidden rounded-full border border-gray-600 px-6 py-3 text-sm font-medium text-white transition hover:border-white">
            {/* Default text */}
            <span className="block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
              Know me better →
            </span>
            {/* Hover text */}
            <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              About Me
            </span>
          </button>
          </div>
        </div>

        {/* Bottom links */}
        <div className="mt-20 flex gap-6 text-xs text-gray-500">
          <a href="https://www.linkedin.com/in/hoyitsowen/" className="hover:text-white">LINKEDIN ↗</a>
          <a href="https://github.com/hoyitsowen" className="hover:text-white">GITHUB ↗</a>
          <a href="https://www.instagram.com/hoyitsowen/" className="hover:text-white">INSTAGRAM ↗</a>
          <a href="mailto:owen.trinidad23@gmail.com" className="hover:text-white">GMAIL ↗</a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
