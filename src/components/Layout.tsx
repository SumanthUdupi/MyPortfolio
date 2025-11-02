import { useState, useEffect, ReactNode, useRef } from 'react';
import sneezeSound from '../../public/audio/sneeze.mp3';

const Layout = ({ children }: { children: ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--mouse-x', `${mousePosition.x}`);
    document.documentElement.style.setProperty('--mouse-y', `${mousePosition.y}`);
    document.documentElement.style.setProperty('--mouse-x-pct', `${(mousePosition.x / window.innerWidth) * 100}%`);
    document.documentElement.style.setProperty('--mouse-y-pct', `${(mousePosition.y / window.innerHeight) * 100}%`);
  }, [mousePosition]);

  const [inkSplotchPosition, setInkSplotchPosition] = useState({ x: 0, y: 0 });
  const [isDraggingInkSplotch, setIsDraggingInkSplotch] = useState(false);
  const inkSplotchRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isDraggingInkSplotch) {
        setInkSplotchPosition(prev => ({
          x: prev.x + event.movementX,
          y: prev.y + event.movementY,
        }));
      }
    };

    const handleMouseUp = () => {
      setIsDraggingInkSplotch(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingInkSplotch]);

  const handleMouseDownInkSplotch = (event: React.MouseEvent<SVGSVGElement>) => {
    setIsDraggingInkSplotch(true);
    event.preventDefault(); // Prevent default drag behavior
  };

  const [coffeeSteamFast, setCoffeeSteamFast] = useState(false);
  const coffeeSteamRef = useRef<SVGSVGElement>(null);

  const handleCoffeeSteamClick = () => {
    setCoffeeSteamFast(true);
    setTimeout(() => {
      setCoffeeSteamFast(false);
    }, 1000); // How long the steam stays fast
  };

  const [showSecondCoffeeRing, setShowSecondCoffeeRing] = useState(false);

  const [showSketchbookModal, setShowSketchbookModal] = useState(false);

  const [penColor, setPenColor] = useState('#444'); // Initial color
  const penColors = ['#444', '#0000FF', '#FF0000']; // Black, Blue, Red
  const handlePenClick = () => {
    setPenColor(prevColor => {
      const currentIndex = penColors.indexOf(prevColor);
      const nextIndex = (currentIndex + 1) % penColors.length;
      return penColors[nextIndex];
    });
  };

  const [waterBreadPittStrikethrough, setWaterBreadPittStrikethrough] = useState(false);
  const handleWaterBreadPittClick = () => {
    setWaterBreadPittStrikethrough(prev => !prev);
  };

  const handleFindSmithsRecordClick = () => {
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Placeholder for Smiths song
    audio.play().catch(error => console.error("Error playing sound:", error));
  };

  const handleDustMoteClick = () => {
    const audio = new Audio(sneezeSound);
    audio.play().catch(error => console.error("Error playing sound:", error));
  };

  const eraserShavingsRef = useRef<SVGSVGElement>(null);
  const [eraserShavingsAnimating, setEraserShavingsAnimating] = useState(false);
  const handleEraserShavingsClick = () => {
    setEraserShavingsAnimating(true);
    setTimeout(() => setEraserShavingsAnimating(false), 1000);
  };

  const pencilScribbleRef = useRef<SVGSVGElement>(null);
  const [pencilScribbleAnimating, setPencilScribbleAnimating] = useState(false);
  const handlePencilScribbleClick = () => {
    setPencilScribbleAnimating(true);
    setTimeout(() => setPencilScribbleAnimating(false), 1000);
  };

  return (
    <>
      <div id="bg-layers">
        <div id="bg-texture"></div>
        <div id="vignette-overlay"></div>
        <svg id="coffee-ring" className="bg-item" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" onClick={() => setShowSecondCoffeeRing(true)}>
          <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(111,78,55,0.3)" strokeWidth="2"/>
          <circle cx="52" cy="48" r="38" fill="none" stroke="rgba(111,78,55,0.15)" strokeWidth="1.5"/>
          <circle cx="50" cy="50" r="25" fill="rgba(111,78,55,0.05)"/>
          <path d="M 50 85 Q 48 90, 50 95" stroke="rgba(111,78,55,0.2)" strokeWidth="1.5" fill="none"/>
        </svg>
        {showSecondCoffeeRing && (
          <svg id="coffee-ring-2" className="bg-item" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ top: '22%', left: '18%', width: '90px', opacity: '0.5', transform: `translate(${inkSplotchPosition.x}px, ${inkSplotchPosition.y}px) rotate(5deg)` }}>
            <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(111,78,55,0.2)" strokeWidth="1.8"/>
            <circle cx="48" cy="52" r="35" fill="none" stroke="rgba(111,78,55,0.1)" strokeWidth="1.2"/>
            <circle cx="50" cy="50" r="20" fill="rgba(111,78,55,0.03)"/>
            <path d="M 50 80 Q 52 85, 50 90" stroke="rgba(111,78,55,0.15)" strokeWidth="1.2" fill="none"/>
          </svg>
        )}
        <svg id="coffee-steam" 
          ref={coffeeSteamRef}
          viewBox="0 0 50 50"
          onClick={handleCoffeeSteamClick}
          className={coffeeSteamFast ? 'steam-fast' : ''}
        >
            <path d="M 15 40 Q 15 20 25 20 Q 35 20 35 40"></path>
            <path d="M 10 40 Q 10 20 20 20 Q 30 20 30 40"></path>
            <path d="M 20 40 Q 20 20 30 20 Q 40 20 40 40"></path>
        </svg>
        <svg id="plant-shadow" className="bg-item" viewBox="0 0 100 100">
            <path d="M 50 100 V 50 C 20 80, 20 20, 50 50 C 80 80, 80 20, 50 50 M 50 50 C 30 30, 70 30, 50 50 M 50 50 C 40 20, 60 20, 50 50" 
            fill="black" stroke="none"/>
        </svg>
        <svg id="sketchbook" className="bg-item" viewBox="0 0 100 150" onClick={() => setShowSketchbookModal(true)}>
            <rect x="5" y="5" width="90" height="140" fill="#F5F5DC" stroke="#333" strokeWidth="1"/>
            <rect x="5" y="5" width="90" height="140" fill="none" stroke="#222" strokeWidth="2" rx="3"/>
            <polyline points="10 15, 90 15, 10 25, 90 25, 10 35, 90 35" fill="none" stroke="#aaa" strokeWidth="0.5"/>
            <path d="M5,10 a 5 5 0 0 1 0,10 M5,20 a 5 5 0 0 1 0,10 M5,30 a 5 5 0 0 1 0,10 M5,40 a 5 5 0 0 1 0,10 M5,50 a 5 5 0 0 1 0,10 M5,60 a 5 5 0 0 1 0,10 M5,70 a 5 5 0 0 1 0,10 M5,80 a 5 5 0 0 1 0,10 M5,90 a 5 5 0 0 1 0,10 M5,100 a 5 5 0 0 1 0,10 M5,110 a 5 5 0 0 1 0,10 M5,120 a 5 5 0 0 1 0,10 M5,130 a 5 5 0 0 1 0,10" 
            fill="none" stroke="#555" strokeWidth="1.5"/>
        </svg>
        {showSketchbookModal && (
          <div className="sketchbook-modal fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div className="paper relative p-8 rounded-lg shadow-lg max-w-md w-full text-center">
              <button className="absolute top-2 right-2 text-xl font-bold" onClick={() => setShowSketchbookModal(false)}>X</button>
              <p className="font-hand text-2xl mb-4">Rough Sketch</p>
              <img src="https://placehold.co/400x300/e0e0e0/333333?text=Wireframe+Sketch" alt="Wireframe Sketch" className="w-full h-auto" />
            </div>
          </div>
        )}
        <svg id="pen" className="bg-item" viewBox="0 0 100 20" transform="rotate(20)" onClick={handlePenClick}>
            <rect x="0" y="5" width="90" height="10" fill={penColor} rx="3"/>
            <path d="M 90 5 L 100 10 L 90 15 Z" fill="#ccc"/>
        </svg>
        <svg id="ink-splotch" 
          ref={inkSplotchRef}
          className="bg-item"
          viewBox="0 0 50 50"
          onMouseDown={handleMouseDownInkSplotch}
          style={{
            transform: `translate(${inkSplotchPosition.x}px, ${inkSplotchPosition.y}px) rotate(-15deg)`,
            cursor: isDraggingInkSplotch ? 'grabbing' : 'grab',
          }}
        >
          <path d="M 25 10 Q 20 15, 15 20 Q 12 25, 15 30 Q 20 35, 25 33 Q 30 36, 35 32 Q 38 27, 36 22 Q 33 15, 28 12 Z" 
            fill="#1e293b"/>
          <circle cx="38" cy="15" r="2" fill="#1e293b"/>
          <circle cx="42" cy="20" r="1.5" fill="#1e293b"/>
        </svg>
        <svg id="eraser-shavings" 
          ref={eraserShavingsRef}
          className={`bg-item ${eraserShavingsAnimating ? 'brush-away' : ''}`}
          viewBox="0 0 60 20"
          onClick={handleEraserShavingsClick}
        >
          <ellipse cx="10" cy="10" rx="6" ry="2" fill="#f8f8f8" transform="rotate(15 10 10)"/>
          <ellipse cx="25" cy="12" rx="7" ry="2.5" fill="#f5f5f5" transform="rotate(-10 25 12)"/>
          <ellipse cx="42" cy="8" rx="5" ry="2" fill="#fafafa" transform="rotate(25 42 8)"/>
          <ellipse cx="50" cy="13" rx="4" ry="1.5" fill="#f0f0f0" transform="rotate(-5 50 13)"/>
        </svg>
        <svg id="pencil-scribble" 
          ref={pencilScribbleRef}
          className={`bg-item ${pencilScribbleAnimating ? 'scribble-animate' : ''}`}
          viewBox="0 0 100 40"
          onClick={handlePencilScribbleClick}
        >
          <path d="M 5 20 Q 15 10, 30 15 T 60 20 T 90 18" stroke="#6b7280" strokeWidth="0.5" fill="none" strokeLinecap="round"/>
          <path d="M 5 25 Q 20 15, 35 22 T 65 25 T 95 23" stroke="#6b7280" strokeWidth="0.5" fill="none" strokeLinecap="round"/>
        </svg>
        <div className="dust-mote" onClick={handleDustMoteClick}></div>
        <div className="dust-mote"></div>
        <div className="dust-mote"></div>
        <div className="bg-sticky-note-todo bg-item">
            <ul className="todo-list">
                <li className="line-through opacity-70">Launch portfolio</li>
                <li 
                  className={waterBreadPittStrikethrough ? 'line-through opacity-70' : ''}
                  onClick={handleWaterBreadPittClick}
                >Water "Bread Pitt"</li>
                <li onClick={handleFindSmithsRecordClick}>Find that Smiths record</li>
            </ul>
        </div>
      </div>
      <div id="click-ripple-container"></div>
      <main id="main-content" className="max-w-7xl mx-auto p-4 sm:p-8 md:p-12">
        {children}
      </main>
    </>
  );
};

export default Layout;
