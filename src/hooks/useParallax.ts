import { useEffect } from 'react';

const useParallax = () => {
  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('[data-parallax-speed]');
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0');
        (el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial call
    updateParallax();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useParallax;
