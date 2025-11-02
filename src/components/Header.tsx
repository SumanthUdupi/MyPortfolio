import { useState, useEffect } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between mb-16 md:mb-24" aria-label="Primary navigation">
      <div className="header-name mb-4 sm:mb-0">
        <h2 className="font-hand text-5xl font-bold text-stone-800 dark:text-stone-100">
          Sumanth Udupi
        </h2>
      </div>
      <div className="flex items-center space-x-6">
        <a href="#professional-work" className="nav-link text-stone-600 dark:text-stone-400 dark:hover:text-cyan-400 transition-colors">Case Studies</a>
        <a href="#about" className="nav-link text-stone-600 dark:text-stone-400 dark:hover:text-cyan-400 transition-colors">About</a>
        <a href="Sumanth-Udupi-Resume.pdf" download="Sumanth-Udupi-Resume.pdf" id="cv-button" className="cv-button font-hand bg-white py-2 px-4 rounded-md shadow-md transform -rotate-2 text-stone-700">
          Download CV (The Paperwork)
        </a>
        <button id="theme-toggle" className="light-switch" aria-label="Toggle light and dark mode" onClick={toggleTheme}>
          <div className="lever"></div>
        </button>
      </div>
    </nav>
  );
};

export default Header;