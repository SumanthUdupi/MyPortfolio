import { useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { darkMode, toggleDarkMode, reducedMotion, toggleReducedMotion } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLongPressing, setIsLongPressing] = useState(false);
  const longPressTimer = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseDown = () => {
    setIsLongPressing(true);
    longPressTimer.current = window.setTimeout(() => {
      // Long press action: play sound and animate
      if (audioRef.current) {
        audioRef.current.play();
      }
      // Add animation class
      const cvButton = document.getElementById('cv-button');
      if (cvButton) {
        cvButton.classList.add('long-press-easter-egg');
        setTimeout(() => cvButton.classList.remove('long-press-easter-egg'), 2000);
      }
    }, 1000); // 1 second long press
  };

  const handleMouseUp = () => {
    setIsLongPressing(false);
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between mb-16 md:mb-24" aria-label="Primary navigation">
        <div className="header-name">
          <h2 className="font-dancing-script text-5xl font-bold text-stone-800 dark:text-stone-100">
            Sumanth Udupi
          </h2>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-6">
          <a href="#professional-work" className="nav-link font-patrick-hand text-stone-700 dark:text-stone-300 dark:hover:text-cyan-400 transition-colors">Case Studies</a>
          <a href="#about" className="nav-link font-patrick-hand text-stone-700 dark:text-stone-300 dark:hover:text-cyan-400 transition-colors">About</a>
          <a href="Sumanth-Udupi-Resume.pdf" download="Sumanth-Udupi-Resume.pdf" id="cv-button" className="cv-button font-patrick-hand bg-white py-2 px-4 rounded-md shadow-md transform -rotate-2 text-stone-700" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
            Download CV (The Paperwork)
          </a>
          <button id="theme-toggle" className="light-switch" aria-label="Toggle light and dark mode" onClick={toggleDarkMode}>
            <div className="lever"></div>
          </button>
          <button id="motion-toggle" className="light-switch" aria-label="Toggle reduced motion" onClick={toggleReducedMotion}>
            <div className="lever"></div>
          </button>
        </div>
        {/* Mobile Hamburger Button */}
        <button
          className="hamburger-button sm:hidden flex flex-col justify-center items-center w-11 h-11 bg-stone-100 dark:bg-stone-700 rounded-md shadow-md transition-colors"
          aria-label="Toggle mobile menu"
          onClick={toggleMobileMenu}
        >
          <span className={`block w-6 h-0.5 bg-stone-700 dark:bg-stone-200 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
          <span className={`block w-6 h-0.5 bg-stone-700 dark:bg-stone-200 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-stone-700 dark:bg-stone-200 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay fixed inset-0 bg-stone-900/50 dark:bg-stone-900/70 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`mobile-menu bg-white dark:bg-stone-800 absolute top-0 right-0 h-full w-80 max-w-[90vw] shadow-2xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <button
              className="close-button absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 transition-colors"
              aria-label="Close mobile menu"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mt-12 space-y-6">
              <a href="#professional-work" className="mobile-nav-link font-patrick-hand block text-xl font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors" onClick={toggleMobileMenu}>Case Studies</a>
              <a href="#about" className="mobile-nav-link font-patrick-hand block text-xl font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors" onClick={toggleMobileMenu}>About</a>
              <a href="Sumanth-Udupi-Resume.pdf" download="Sumanth-Udupi-Resume.pdf" className="mobile-cv-button font-patrick-hand inline-block bg-stone-100 dark:bg-stone-700 py-3 px-6 rounded-md shadow-md transform -rotate-1 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-600 transition-colors" onClick={toggleMobileMenu} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
                Download CV (The Paperwork)
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Hidden audio for easter egg */}
      <audio ref={audioRef} src="/audio/binder-clip.mp3" preload="none" />
    </>
  );
};

export default Header;