import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const testimonialData = [
  {
    id: 1,
    name: 'Nijin Nazar',
    role: 'SDE Intern @ CuriousJr',
    image: 'https://via.placeholder.com/150',
    text: 'I came to know about Devraj as a Web Designer and Content Creator. Over time, I discovered his incredible creativity and technical sense. He delivers modern UI/UX solutions with impressive attention to detail, and his mentorship is truly inspiring.',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: 2,
    name: 'Aisha Rahman',
    role: 'Product Designer',
    image: 'https://via.placeholder.com/150',
    text: 'Owen’s work is polished and thoughtful. He translated our product vision into a beautiful interface that feels intuitive and fast, while keeping accessibility and performance at the forefront.',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: 3,
    name: 'Samuel Lin',
    role: 'Founder @ BrightPixel',
    image: 'https://via.placeholder.com/150',
    text: 'Collaborating with Owen was a smooth experience. He delivered clean components, responsive layouts, and a strong attention to user experience that helped the product stand out.',
    linkedinUrl: 'https://linkedin.com'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandText, setExpandText] = useState(false);
  const totalItems = testimonialData.length;

  const handlePrev = () => {
    setExpandText(false);
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const handleNext = () => {
    setExpandText(false);
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  const current = testimonialData[currentIndex] || testimonialData[0];
  const showToggle = current?.text?.length > 160;
  const excerpt = current?.text?.slice(0, 160);
  const displayText = expandText || !showToggle ? current?.text : `${excerpt}...`;

  return (
    <section id="testimonials" className="relative w-full bg-white dark:bg-[#141414] px-6 py-24 md:px-16 lg:px-20 transition-colors duration-300 font-sans overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12 items-center">
          
          {/* Left Side Header */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="mb-3 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-lime-600 dark:text-lime-400 font-clash">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.2L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
              </svg> 
              Testimonials
            </span>

            <h2 className="text-5xl md:text-6xl font-semibold font-clash tracking-tight text-slate-950 dark:text-white leading-[1.1]">
              What other <br className="hidden md:block" /> people say
            </h2>

            <p className="mt-4 text-sm md:text-base text-neutral-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              Over the years, I've had the privilege of collaborating with some incredible people. Here is a look at what we achieved together through their eyes.
            </p>
          </div>

          {/* Right Side Card & Navigation controls */}
          <div className="lg:col-span-7 flex flex-col w-full relative">
            
            {/* Carousel Content Row with Side Overflow Peeks */}
            <div className="relative flex items-center w-full">
              
              {/* Left Side Shadow Peek Card */}
              <div className="absolute -left-16 w-12 h-56 border border-zinc-200 dark:border-zinc-800/40 bg-zinc-50/50 dark:bg-zinc-900/10 rounded-3xl hidden md:block opacity-40 blur-[0.5px]" />

              {/* Central Active Card */}
              <div className="w-full bg-white dark:bg-[#121316] border border-zinc-200 dark:border-zinc-800/80 rounded-3xl p-8 md:p-10 transition-all duration-300 shadow-[0_24px_80px_rgba(15,23,42,0.04)] dark:shadow-none">
                
                {/* User Header Info */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Plain White Avatar Ring */}
                  <div className="relative w-14 h-14 rounded-full p-[2px] bg-white border border-zinc-200 flex-shrink-0">
                    <img 
                      src={current?.image} 
                      alt={current?.name} 
                      className="w-full h-full object-cover rounded-full bg-zinc-100 dark:bg-zinc-800"
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-slate-950 dark:text-white leading-tight">{current?.name}</h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-0.5">{current?.role}</p>
                  </div>
                </div>

                {/* Main Body Quote Text */}
                <p className="text-zinc-700 dark:text-zinc-300 text-sm md:text-base leading-relaxed font-light">
                  {displayText}
                  {showToggle && (
                    <button
                      type="button"
                      onClick={() => setExpandText((prev) => !prev)}
                      className="ml-2 inline-flex items-center text-sm font-semibold text-slate-950 dark:text-white hover:underline"
                    >
                      {expandText ? 'show less' : 'see more'}
                    </button>
                  )}
                </p>
              </div>

              {/* Right Side Shadow Peek Card */}
              <div className="absolute -right-16 w-12 h-56 border border-zinc-200 dark:border-zinc-800/40 bg-zinc-50/50 dark:bg-zinc-900/10 rounded-3xl hidden md:block opacity-40 blur-[0.5px]" />
            </div>

            {/* Bottom Controls Panel */}
            <div className="flex items-center justify-between mt-8 px-2">
              
              {/* Linked Outbound Anchor 
              <a 
                href={current?.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-950 dark:text-white text-xs md:text-sm font-medium border-b border-zinc-300 dark:border-zinc-700 pb-1 flex items-center gap-1 hover:border-slate-950 dark:hover:border-white transition-colors duration-200"
              >
                Check it out on Linkedin <ArrowUpRight className="w-3.5 h-3.5" />
              </a> */}

              {/* Slider Pagination controls */}
              <div className="flex items-center gap-4">
                <button 
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-slate-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                
                <span className="text-xs font-mono tracking-wider text-zinc-400 dark:text-zinc-500 min-w-[45px] text-center">
                  <strong className="text-slate-950 dark:text-zinc-300">{currentIndex + 1}</strong> / {totalItems}
                </span>

                <button 
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-slate-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}