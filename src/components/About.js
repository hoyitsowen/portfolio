import React from 'react';
import ScrollReveal from './ScrollReveal';
import WordHighlight from './WordHighlight';

const About = () => {
  return (
    <section id="about" className="relative flex justify-center px-3 py-20 md:py-32 site-hero bg-white dark:bg-[#141414]">
      <div className="w-full max-w-4xl text-center stack stack--lg">
        {/* Section label */}
        <p className="text-sm uppercase tracking-widest text-accent font-clash">
          ✦ About Me
        </p>

        {/* Main content */}
        <ScrollReveal
          baseOpacity={0}
          enableBlur
          baseRotation={3}
          blurStrength={8}
        >
          <h2 className="text-3xl md:text-4xl font-semibold leading-relaxed max-prose mx-auto font-sans">
            <WordHighlight stagger={60}>
              I’m Owen Trinidad, with over 3+ years in frontend development, I’ve built 10+ React projects with a strong focus on clean UI and performance. My work focuses on performance, accessibility, and smooth user interactions — because good design should feel effortless.
            </WordHighlight>
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
