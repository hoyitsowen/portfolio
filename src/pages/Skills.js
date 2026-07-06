import React from 'react';
import LogoLoop from '../components/LogoLoop';
import Testimonials from './Testimonials';
import {
  HiOutlineArrowRight,
  HiOutlineCodeBracket,
  HiOutlineSparkles,
  HiOutlineSquares2X2,
} from 'react-icons/hi2';
import {
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiBootstrap,
  SiLaravel,
  SiMysql,
  SiGit,
  SiMariadb,
} from 'react-icons/si';

const skillCards = [
  {
    id: 'frontend',
    icon: HiOutlineCodeBracket,
    title: 'Frontend Development',
    description:
      'I build modern, responsive web applications that balance aesthetics with performance. My focus is creating intuitive interfaces, smooth interactions, and accessible experiences that users genuinely enjoy.',
  },
  {
    id: 'branding',
    icon: HiOutlineSparkles,
    title: 'Branding Design',
    description:
      'I craft visual identities that tell meaningful stories. From logos and color systems to marketing assets, I design brands that are memorable, consistent, and aligned with their purpose.',  },
  {
    id: 'uiux',
    icon: HiOutlineSquares2X2,
    title: 'UI/UX & Tools',
    description:
      'I transform ideas into user-centered digital experiences through research, wireframing, prototyping, and thoughtful design decisions. Every interface is created with clarity, usability, and accessibility in mind.',  },
];

const techLogos = [
  {
    node: <SiReact className="text-[2.5rem] text-slate-950/90 transition-colors duration-300 dark:text-white/95" />,
    title: 'React',
    href: 'https://react.dev',
  },
  {
    node: <SiTailwindcss className="text-[2.5rem] text-slate-950/90 transition-colors duration-300 dark:text-white/95" />,
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
  },
  {
    node: <SiFigma className="text-[2.5rem] text-slate-950/90 transition-colors duration-300 dark:text-white/95" />,
    title: 'Figma',
    href: 'https://www.figma.com',
  },
  {
    node: <SiBootstrap className="text-[2.5rem] text-slate-950/90 transition-colors duration-300 dark:text-white/95" />,
    title: 'Bootstrap',
    href: 'https://getbootstrap.com',
  },
  {
    node: <SiLaravel className="text-[2.5rem] text-slate-950/90 transition-colors duration-300 dark:text-white/95" />,
    title: 'Laravel',
    href: 'https://laravel.com',
  },
  {
    node: <SiMysql className="text-[2.5rem] text-slate-950/90 transition-colors duration-300 dark:text-white/95" />,
    title: 'MySQL',
    href: 'https://www.mysql.com',
  },
  {
    node: <SiGit className="text-[2.5rem] text-slate-950/90 transition-colors duration-300 dark:text-white/95" />,
    title: 'Git',
    href: 'https://git-scm.com',
  },
  {
    node: <SiMariadb className="text-[2.5rem] text-slate-950/90 transition-colors duration-300 dark:text-white/95" />,
    title: 'MariaDB',
    href: 'https://mariadb.org',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-white dark:bg-[#141414] px-6 py-24 md:px-16 lg:px-20 transition-colors duration-300">
      <div className="mx-auto max-w-7xl text-center">
        <span className="inline-flex items-center justify-center gap-2 text-sm uppercase tracking-widest text-lime-400 font-clash">
          ✦ Specialty
        </span>

        <h2 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 dark:text-white font-clash md:text-6xl">
          Areas of Expertise
        </h2>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {skillCards.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.id}
              className="group flex h-full flex-col rounded-[24px] border border-zinc-200/10 bg-zinc-50/90 p-10 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 ease-out hover:-translate-y-2 hover:border-lime-400/40 hover:bg-white/95 hover:shadow-[0_25px_70px_rgba(15,23,42,0.16)] dark:border-zinc-700/60 dark:bg-zinc-950/80"
            >
              <div className="flex items-center justify-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-lime-400/15 bg-lime-400/10 text-lime-400 transition duration-300 group-hover:scale-105 dark:border-lime-400/20 dark:bg-lime-400/10">
                  <Icon className="h-8 w-8" />
                </div>
              </div>

              <div className="mt-10 flex-1">
                <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-5 text-base font-sans leading-8 text-zinc-600 dark:text-zinc-400">
                  {card.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-20 p-2 transition duration-300">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          fadeOut
          scaleOnHover
          ariaLabel="Technology partners"
          className="text-slate-950 dark:text-white"
        />
      </div>
    </section>
  );
};

export default Skills;
