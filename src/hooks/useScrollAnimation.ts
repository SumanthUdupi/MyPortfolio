import { useEffect, useRef } from 'react';

const useScrollAnimation = () => {
  const elementsRef = useRef<HTMLElement[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observerRef.current = observer;

    // Observe all currently registered elements
    elementsRef.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const registerElement = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
      // If observer is already created, observe the new element immediately
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    }
  };

  return registerElement;
};

// Fallback mechanism: Make all fade-in-up elements visible after a timeout
// This ensures content is visible even if IntersectionObserver fails
if (typeof window !== 'undefined') {
  setTimeout(() => {
    const elements = document.querySelectorAll('.fade-in-up:not(.is-visible)');
    elements.forEach((el) => {
      el.classList.add('is-visible');
    });
  }, 3000); // 3 seconds should be enough for most page loads
}

export default useScrollAnimation;
