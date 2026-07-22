import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import projectData from '../lib/projectData';
import Footer from './Footer';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projectData.find((p) => String(p.id) === String(id));

  if (!project) {
    return (
      <div className="min-h-screen p-12">
        <p className="text-lg">Project not found.</p>
        <Link to="/projects" className="font-sans text-lime-600">Back to projects</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full mt-6 bg-white text-black transition-colors duration-500 dark:bg-[#141414] dark:text-white">
      <main className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
        <Link to="/projects" className="text-sm font-sans text-lime-600">← Back to projects</Link>

        <header className="my-6">
          <h1 className="text-4xl font-semibold dark:text-white">{project.title}</h1>
          <p className="mt-2 text-sm font-sans text-gray-500 dark:text-gray-400">{project.category} • {project.year}</p>
        </header>

        <section className="mb-8">
            <div className="relative"> 
              <img 
                src={project.imageHeader} 
                alt={project.title} 
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-[1rem] object-cover shadow-xl" 
              />
              
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute z-10 left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/30 bg-white/70 px-3 py-1 text-[10px] font-semibold font-sans uppercase tracking-[0.24em] text-gray-700 backdrop-blur transition hover:bg-white/90 dark:border-white/10 dark:bg-black/40 dark:text-gray-200 dark:hover:bg-black/60 sm:left-6 sm:top-6"
                >
                  View Live Site
                  <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
                </a>
              )}
            </div>
          <p className="mt-6 font-sans text-gray-700 dark:text-gray-300">{project.description}</p>
          
          <div className="mt-3 flex justify-start">
            <Link to={project.github} target="_blank" rel="noopener noreferrer" className="group relative mt-3 font-sans w-fit overflow-hidden rounded-full border border-gray-300 dark:border-gray-600 px-6 py-3 text-sm font-medium text-black dark:text-white transition hover:border-black dark:hover:border-gray-400">
              <span className="block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                Open in Github
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                Open in Github
              </span>
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold dark:text-white">Preview</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {project.screenshots.map((s, i) => (
              <img key={i} src={s} alt={`${project.title} screenshot ${i + 1}`} className="w-full rounded-md object-cover" />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold dark:text-white">Tech Stack</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="rounded-md border px-3 py-1 font-sans text-sm text-gray-700 dark:text-gray-200">{t}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold dark:text-white">Key Contributions</h3>
          <ul className="mt-3 list-inside list-disc space-y-2 font-sans text-gray-700 dark:text-gray-300">
            {project.contributions?.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold dark:text-white">Features</h3>
          <ul className="mt-3 list-inside list-disc space-y-2 font-sans text-gray-700 dark:text-gray-300">
            {project.features?.map((c, i) => (
              <li key={i}>
                <span className="font-bold text-black dark:text-white">{c.title}:</span> {c.description}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;