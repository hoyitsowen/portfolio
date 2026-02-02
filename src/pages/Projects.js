import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'TigerRoutes',
    category: 'Development',
    year: '2025',
    image: '../assets/Project1.png',
    link: ''
  },
  {
    title: 'Pamana Restaurant',
    category: 'Development & Design',
    year: '2024',
    image: '/projects/code.png',
    link: '#'
  },
  {
    title: 'Austins Cafe & Gastro Pub',
    category: 'Development & Design',
    year: '2024',
    image: '/projects/austins.png',
    link: '#'
  },
  {
  }

]

export default function Projects() {
  return (
    <section className="relative w-full bg-white dark:bg-[#141414] px-6 pb-14 md:px-20">
      {/* Header */}
      <div className="mb-16 max-w-3xl">
        <span className="mb-4 inline-flex items-center gap-2 text-sm font-clash uppercase tracking-wide text-lime-400">
          ✦ My Work
        </span>

        <h2 className="text-4xl font-semibold text-black dark:text-white md:text-5xl">
          Selected Projects
        </h2>

        <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 font-sans">
          Here’s a curated selection showcasing my expertise and the achieved results.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            {/* Image Card */}
            <div className="relative overflow-hidden rounded-[28px] bg-neutral-900 p-10 transition-transform duration-500 group-hover:-translate-y-2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-xl object-cover shadow-xl"
              />
            </div>

            {/* Meta */}
            <div className="mt-6 flex items-center justify-between font-sans">
              <div>
                <h3 className="text-xl font-medium text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {project.category}
                </p>
              </div>

              <span className="text-sm text-neutral-700 dark:text-neutral-500">
                {project.year}
              </span>
            </div>
          </a>
          
        ))}
      </div>
      <div className="flex justify-center font-sans">
        <button className="group relative mt-6 w-fit overflow-hidden rounded-full border border-gray-600 px-6 py-3 text-md font-medium text-black dark:text-white transition hover:border-white">
          <span className="block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
            View All Projects
          </span>
          <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View All Projects
          </span>
        </button>
      </div>

    </section>
  )
}
