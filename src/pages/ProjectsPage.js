import React, { useState } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import projectData from '../lib/projectData';

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Development', 'Design'];

  const filteredProjects = projectData.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white text-black transition-colors duration-500 dark:bg-[#141414] dark:text-white">
      <main className="mx-auto max-w-6xl flex-col px-6 py-12 md:px-4 lg:py-24">
        <header className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2 text-sm uppercase tracking-widest text-lime-600 dark:text-lime-400">
            ✦ My Work
            </div>
            <h1 className="font-clash text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl dark:text-white">
              Bringing digital ideas to life.
            </h1>
          </div>
          <p className="max-w-md text-base leading-7 font-sans text-gray-600 dark:text-gray-400">
            A curated look at the interfaces, systems, and digital journeys I’ve crafted across UI/UX design and frontend development.
          </p>
        </header>

        <div className="mb-10 flex flex-col gap-4 rounded-[2rem] border border-gray-200 bg-gray-50/70 p-4 font-sans shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.03] md:flex-row md:items-center md:justify-between md:px-6 md:py-4">
          <div className="relative w-full md:max-w-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search projects"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-gray-200 bg-white py-2.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-gray-100 dark:border-white/10 dark:bg-[#111111] dark:text-white dark:focus:border-white/20"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 transition ${
                  activeFilter === filter
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-black'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="group block no-underline">
              <article className="flex flex-col rounded-[2rem] border border-gray-200 bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-[#151515]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full rounded-[1.2rem] object-cover shadow-sm"
                  />

                <div className="flex flex-1 items-end justify-between gap-4 px-1 pb-1">
                  <div>
                    <h3 className="mt-3 text-2xl font-semibold font-clash text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="mt-2 text-sm font-sans text-gray-500 dark:text-gray-400">{project.category}</p>
                  </div>
                  <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium font-sans text-gray-500 shadow-sm dark:border-white/10 dark:bg-[#111111] dark:text-gray-300">
                    {project.year}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="rounded-[2rem] border border-dashed border-gray-300 bg-white/70 px-8 py-16 text-center text-gray-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-400">
            No projects found matching your search criteria.
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;