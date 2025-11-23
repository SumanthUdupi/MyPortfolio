import { ReactNode } from 'react';
import useIsMobile from '../hooks/useIsMobile';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

const Layout = ({ children }: { children: ReactNode }) => {
  const isMobile = useIsMobile();
  const { darkMode } = useTheme(); // Use useTheme hook

  return (
    <div id="background-container" className={`relative z-0 min-h-screen transition-colors duration-500
      ${darkMode ? 'bg-gradient-to-br from-stone-900 via-indigo-950 to-stone-800' : 'bg-gradient-to-br from-yellow-50 via-amber-100 to-stone-100'}`}>
      <div id="bg-layers" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div id="bg-texture" className={`${darkMode ? 'opacity-20' : 'opacity-50'}`}></div>
        <svg id="coffee-ring" className="bg-item" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(111,78,55,0.3)" strokeWidth="2"/>
          <circle cx="50" cy="50" r="25" fill="rgba(111,78,55,0.05)"/>
          <path d="M 50 85 Q 48 90, 50 95" stroke="rgba(111,78,55,0.2)" strokeWidth="1.5" fill="none"/>
        </svg>
        <svg id="coffee-steam" viewBox="0 0 50 50">
            <path d="M 15 40 Q 15 20 25 20 Q 35 20 35 40"></path>
            <path d="M 10 40 Q 10 20 20 20 Q 30 20 30 40"></path>
            <path d="M 20 40 Q 20 20 30 20 Q 40 20 40 40"></path>
        </svg>
        <svg id="plant-shadow" className="bg-item" viewBox="0 0 100 100">
            <path d="M 50 100 V 50 C 20 80, 20 20, 50 50 C 80 80, 80 20, 50 50 M 50 50 C 30 30, 70 30, 50 50 M 50 50 C 40 20, 60 20, 50 50" 
            fill="black" stroke="none"/>
        </svg>
        <svg id="sketchbook" className="bg-item" viewBox="0 0 100 150">
            <rect x="5" y="5" width="90" height="140" fill="#F5F5DC" stroke="#333" strokeWidth="1"/>
            <rect x="5" y="5" width="90" height="140" fill="none" stroke="#222" strokeWidth="2" rx="3"/>
            <polyline points="10 15, 90 15, 10 25, 90 25, 10 35, 90 35" fill="none" stroke="#aaa" strokeWidth="0.5"/>
            <path d="M5,10 a 5 5 0 0 1 0,10 M5,20 a 5 5 0 0 1 0,10 M5,30 a 5 5 0 0 1 0,10 M5,40 a 5 5 0 0 1 0,10 M5,50 a 5 5 0 0 1 0,10 M5,60 a 5 5 0 0 1 0,10 M5,70 a 5 5 0 0 1 0,10 M5,80 a 5 5 0 0 1 0,10 M5,90 a 5 5 0 0 1 0,10 M5,100 a 5 5 0 0 1 0,10 M5,110 a 5 5 0 0 1 0,10 M5,120 a 5 5 0 0 1 0,10 M5,130 a 5 5 0 0 1 0,10" 
            fill="none" stroke="#555" strokeWidth="1.5"/>
        </svg>
        <svg id="pen" className="bg-item" viewBox="0 0 100 20" transform="rotate(20)">
            <rect x="0" y="5" width="90" height="10" fill="#444" rx="3"/>
            <path d="M 90 5 L 100 10 L 90 15 Z" fill="#ccc"/>
        </svg>
        <svg id="ink-splotch" className="bg-item" viewBox="0 0 50 50">
          <path d="M 25 10 Q 20 15, 15 20 Q 12 25, 15 30 Q 20 35, 25 33 Q 30 36, 35 32 Q 38 27, 36 22 Q 33 15, 28 12 Z" 
            fill="#1e293b"/>
          <circle cx="38" cy="15" r="2" fill="#1e293b"/>
          <circle cx="42" cy="20" r="1.5" fill="#1e293b"/>
        </svg>
        <svg id="eraser-shavings" className="bg-item" viewBox="0 0 60 20">
          <ellipse cx="10" cy="10" rx="6" ry="2" fill="#f8f8f8" transform="rotate(15 10 10)"/>
          <ellipse cx="25" cy="12" rx="7" ry="2.5" fill="#f5f5f5" transform="rotate(-10 25 12)"/>
          <ellipse cx="42" cy="8" rx="5" ry="2" fill="#fafafa" transform="rotate(25 42 8)"/>
          <ellipse cx="50" cy="13" rx="4" ry="1.5" fill="#f0f0f0" transform="rotate(-5 50 13)"/>
        </svg>
        <svg id="pencil-scribble" className="bg-item" viewBox="0 0 100 40">
          <path d="M 5 20 Q 15 10, 30 15 T 60 20 T 90 18" stroke="#6b7280" strokeWidth="0.5" fill="none" strokeLinecap="round"/>
          <path d="M 5 25 Q 20 15, 35 22 T 65 25 T 95 23" stroke="#6b7280" strokeWidth="0.5" fill="none" strokeLinecap="round"/>
        </svg>
        <div className="dust-mote"></div>
        <div className="dust-mote"></div>
        <div className="dust-mote"></div>
        <div className="bg-sticky-note-todo bg-item">
            <ul className="todo-list">
                <li className="line-through opacity-70">Launch portfolio</li>
                <li>Water "Bread Pitt"</li>
                <li>Find that Smiths record</li>
            </ul>
        </div>
        {/* NEW: Ruler */}
        <img id="ruler" src="/images/ruler.svg" className="bg-item" style={{ top: '10%', right: '10%', width: '180px', transform: 'rotate(10deg)', opacity: 0.5 }} alt="Ruler" />
        {/* NEW: Color Swatches */}
        <img id="color-swatches" src="/images/color-swatches.svg" className="bg-item" style={{ bottom: '25%', left: '30%', width: '120px', transform: 'rotate(-8deg)', opacity: 0.6 }} alt="Color Swatches" />
      </div>
      <div id="click-ripple-container"></div>
      <main id="main-content" className="relative z-10 max-w-7xl mx-auto p-4 sm:p-8 md:p-12">
        {children}
      </main>
    </div>
  );
};

export default Layout;