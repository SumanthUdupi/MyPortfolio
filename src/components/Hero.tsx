import { useRef, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const registerElement = useScrollAnimation();

  useEffect(() => {
    if (sectionRef.current) {
      registerElement(sectionRef.current);
    }
  }, [registerElement]);

  return (
    <section id="hero" className="mb-24 md:mb-32 fade-in-up" ref={sectionRef}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <div className="w-full md:w-2/3">
          <h1 className="font-kalam text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 dark:text-stone-100">
            I turn complex ESG & EHS challenges into elegant, human-centered solutions.
          </h1>
          <p className="font-mono text-base md:text-lg text-stone-600 dark:text-stone-400">
            I'm a Business Analyst who bridges the gap between data and design, creating clear, data-driven solutions for complex ESG, EHS, and QMS challenges.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="sticky-note sticky-note-yellow p-4 md:p-8 w-full max-w-xs mx-auto">
            <p className="font-caveat text-xl sm:text-2xl md:text-3xl text-stone-800">
              Hello, I'm Sumanth. Welcome to my digital atelier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;