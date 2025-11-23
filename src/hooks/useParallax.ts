import { useEffect } from 'react';

const useParallax = () => {
  useEffect(() => {
    const root = document.documentElement;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      root.style.setProperty('--scroll-y', scrollY + 'px');
      console.log('Scroll Y:', scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      root.style.setProperty('--mouse-x', mouseX + 'px');
      root.style.setProperty('--mouse-y', mouseY + 'px');
      root.style.setProperty('--cursor-x', e.clientX + 'px');
      root.style.setProperty('--cursor-y', e.clientY + 'px');

      const x_pct = (e.clientX / window.innerWidth) * 100;
      const y_pct = (e.clientY / window.innerHeight) * 100;
      root.style.setProperty('--mouse-x-pct', `${x_pct}%`);
      root.style.setProperty('--mouse-y-pct', `${y_pct}%`);
      console.log('Mouse X:', mouseX, 'Mouse Y:', mouseY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        root.style.setProperty('--mouse-x', touchX + 'px');
        root.style.setProperty('--mouse-y', touchY + 'px');
        root.style.setProperty('--cursor-x', touchX + 'px');
        root.style.setProperty('--cursor-y', touchY + 'px');

        const x_pct = (touchX / window.innerWidth) * 100;
        const y_pct = (touchY / window.innerHeight) * 100;
        root.style.setProperty('--mouse-x-pct', `${x_pct}%`);
        root.style.setProperty('--mouse-y-pct', `${y_pct}%`);
        console.log('Touch X:', touchX, 'Touch Y:', touchY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Set initial values
    handleScroll();
    handleMouseMove({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 } as MouseEvent); // Center initially

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
};

export default useParallax;
