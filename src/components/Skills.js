import React from 'react';
import '../styles/Skills.css';
import FlowingMenu from './FlowingMenu';
import LogoLoop from './LogoLoop';
import { SiReact, SiTailwindcss, SiFigma, SiBootstrap, SiLaravel, SiMysql, SiGit, SiMariadb } from 'react-icons/si';

const demoItems = [
          { link: '#', text: 'Development', image: 'https://picsum.photos/600/400?random=1' },
          { link: '#', text: 'UI/UX Design', image: 'https://picsum.photos/600/400?random=2' },
          { link: '#', text: 'Branding', image: 'https://picsum.photos/600/400?random=3' },
        ];

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiMariadb />, title: "MariaDB", href: "https://mariadb.org" }
];

const Skills = () => {
  return (
    <section className="relative w-full bg-black px-6 py-24 md:px-20">
        <span className="mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-lime-400">
          ✦ Specialty
        </span>

        <h2 className="text-4xl font-semibold text-white md:text-5xl">
          Areas of Expertise
        </h2>
        <div style={{ height: '600px', position: 'relative' }}>
          <FlowingMenu items={demoItems} />
        </div>

        <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
    </section>

    
  );
};

export default Skills;
