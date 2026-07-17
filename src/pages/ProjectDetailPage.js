import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectData from '../lib/projects';
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
    <div className="min-h-screen bg-white text-black transition-colors duration-500 dark:bg-[#141414] dark:text-white">
      <main className="mx-auto max-w-4xl px-6 py-12 lg:py-20">
        <Link to="/projects" className="text-sm font-sans text-lime-600">← Back to projects</Link>

        <header className="my-6">
          <h1 className="text-4xl font-semibold">{project.title}</h1>
          <p className="mt-2 text-sm font-sans text-gray-500 dark:text-gray-400">{project.category} • {project.year}</p>
        </header>

        <section className="mb-8">
          <div className={`${project.accent} rounded-[1.2rem] p-6`}> 
            <img src={project.image} alt={project.title} className="w-full rounded-md object-cover" />
          </div>
          <p className="mt-4 font-sans text-gray-700 dark:text-gray-300">{project.description}</p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold">Design screens</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.screenshots.map((s, i) => (
              <img key={i} src={s} alt={`${project.title} screenshot ${i + 1}`} className="w-full rounded-md object-cover" />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold">Tech stack</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="rounded-md border px-3 py-1 font-sans text-sm text-gray-700 dark:text-gray-200">{t}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold">Features</h3>
          <ul className="mt-3 list-inside list-disc space-y-2 font-sans text-gray-700 dark:text-gray-300">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
