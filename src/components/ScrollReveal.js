import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = '+=300',
  wordAnimationEnd = '+=300',
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    if (typeof children !== 'string') return children;

    return children.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef?.current || window;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { rotate: baseRotation, transformOrigin: '0% 50%' },
        {
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 85%',
            end: rotationEnd,
            scrub: true,
          },
        }
      );

      const wordElements = el.querySelectorAll('.word');

      if (!wordElements.length) return;

      gsap.fromTo(
        wordElements,
        { opacity: baseOpacity },
        {
          color: '#ffffff',
          opacity: 1,
          stagger: 0.04,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 85%',
            end: '+=300',
            scrub: true,
          },
        }
      );

      if (enableBlur) {
        gsap.fromTo(
          wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            filter: 'blur(0px)',
            stagger: 0.05,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top 85%',
              end: wordAnimationEnd,
              scrub: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      <div
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
      >
        {splitText}
      </div>
    </div>
  );
};

export default ScrollReveal;
