import React from 'react';
import Lanyard from '../components/Lanyard';

const AboutPage = () => {
  return (
    <section className="relative flex justify-center px-3 py-20 md:py-32 site-hero bg-white dark:bg-[#141414] min-h-screen">
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      <div className="w-full max-w-4xl text-center stack stack--lg">
        {/* Section label */}
        <p className="text-sm uppercase tracking-widest text-accent font-clash">
          ✦ About Me
        </p>
        {/* Main content */}
          <p className="text-lg md:text-xl font-light font-sans leading-relaxed max-prose mx-auto dark:text-white mt-8">
            This is a dedicated About page where you can learn more about my journey, skills, and passion for creating exceptional user experiences. Feel free to explore my projects and get in touch if you'd like to collaborate!
          </p>
      </div>
    </section>
  );
};

export default AboutPage;
