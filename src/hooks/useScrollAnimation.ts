import { useEffect, useRef } from 'react';
import useIsMobile from './useIsMobile';

const useScrollAnimation = () => {
  const elementsRef = useRef<HTMLElement[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Disable animations on mobile for performance
    if (isMobile) {
      // Immediately make all elements visible without animation
      elementsRef.current.forEach((el) => {
        if (el) {
          el.classList.add('is-visible');
        }
      });
      return;
    }

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
        // Add rootMargin for better performance on desktop
        rootMargin: '50px 0px',
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
  }, [isMobile]);

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
