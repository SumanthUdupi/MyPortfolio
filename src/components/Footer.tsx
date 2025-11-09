const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center text-stone-500 font-body text-sm mt-16 dark:text-stone-400">
      <p className="font-body text-xl sm:text-2xl text-stone-700 dark:text-stone-300 mb-4 sm:mb-6">Intrigued? Let's build something elegant together.</p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-4">
        <a href="https://linkedin.com/in/sumanth-udupi" target="_blank" rel="noopener noreferrer" className="nav-link text-lg inline-flex items-center gap-2 dark:text-stone-400 dark:hover:text-cyan-400 min-h-[44px] min-w-[44px] p-2 -m-2 touch-manipulation" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block flex-shrink-0"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          LinkedIn &rarr;
        </a>
        <a href="https://github.com/SumanthUdupi" target="_blank" rel="noopener noreferrer" className="nav-link text-lg inline-flex items-center gap-2 dark:text-stone-400 dark:hover:text-cyan-400 min-h-[44px] min-w-[44px] p-2 -m-2 touch-manipulation" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block flex-shrink-0"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          GitHub &rarr;
        </a>
        <a href="mailto:sumanthudupi858@gmail.com" className="nav-link text-lg inline-flex items-center gap-2 dark:text-stone-400 dark:hover:text-cyan-400 min-h-[44px] min-w-[44px] p-2 -m-2 touch-manipulation" aria-label="Email">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block flex-shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          Email Me &rarr;
        </a>
        <a href="tel:+919741712966" className="nav-link text-lg inline-flex items-center gap-2 dark:text-stone-400 dark:hover:text-cyan-400 min-h-[44px] min-w-[44px] p-2 -m-2 touch-manipulation" aria-label="Phone">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Phone &rarr;
        </a>
      </div>
      <p className="text-sm sm:text-base">Designed and built with 🎨, ☕, and a few metaphors.</p>
      <p className="text-sm sm:text-base">&copy; {currentYear} Sumanth Udupi. All rights reserved.</p>
      <div
        className="mt-4 text-xs text-stone-400 dark:text-stone-600 hover:text-stone-600 dark:hover:text-stone-400 transition-colors duration-200 min-h-[44px] min-w-[44px] p-2 -m-2 touch-manipulation"
        onClick={() => (window as any).help && (window as any).help()}
        title="Psst... A secret quest awaits!"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            (window as any).help && (window as any).help();
          }
        }}
        aria-label="Activate secret quest"
      >
        Found a secret?
      </div>
    </footer>
  );
};

export default Footer;
