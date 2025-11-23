import WornWoodenDeskBackground from './components/WornWoodenDeskBackground';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import About from './components/About';
import FileCabinet from './components/FileCabinet';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import CaseStudyPage from './components/CaseStudyPage'; // Added
import { caseStudies, CaseStudy } from './data/caseStudies';
import pokemonCapturedSound from '/audio/pokemon-captured.mp3';
import engineIgnitionSound from '/audio/engine-ignition.mp3';
import f1FlybySound from '/audio/f1-flyby.mp3';
import useIsMobile from './hooks/useIsMobile'; // Added
import useParallax from './hooks/useParallax'; // Added
import './style.css';

function App() {
  useParallax(); // Call the hook
  const isMobile = useIsMobile(); // Added
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null); // Modified
  const selectedCaseStudy = selectedCaseStudyId ? caseStudies[selectedCaseStudyId] : null; // Derived

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      const rippleContainer = document.getElementById('click-ripple-container');
      if (rippleContainer) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        rippleContainer.appendChild(ripple);

        const size = 100; // Fixed size for a more subtle ripple
        const x = e.clientX - rippleContainer.getBoundingClientRect().left - size / 2;
        const y = e.clientY - rippleContainer.getBoundingClientRect().top - size / 2;

        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        ripple.onanimationend = () => {
          ripple.remove();
        };
      }
    };

    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCaseStudyId(null); // Clear for mobile page and desktop modal
  };

  const playSound = (soundFile: string) => {
    const audio = new Audio(soundFile);
    audio.play().catch(error => console.error("Error playing sound:", error));
  };

  const handleProjectClick = (projectId: string) => {
    console.log('Project clicked:', projectId);
    switch (projectId) {
      case 'pokedex-app':
        playSound(pokemonCapturedSound);
        break;
      case 'auto-dashboard':
        playSound(engineIgnitionSound);
        break;
      case 'f1-data-analytics':
        playSound(f1FlybySound);
        break;
      default:
        break;
    }
    if (isMobile) {
      setSelectedCaseStudyId(projectId);
    } else {
      setSelectedCaseStudyId(projectId); // Still set ID for desktop modal to derive case study
      setIsModalOpen(true);
    }
    console.log('isModalOpen after setting:', true);
  };

  const afterHoursProjectIds = ['pokedex-app', 'auto-dashboard', 'f1-data-analytics'];
  const personalProjects = afterHoursProjectIds.map(id => caseStudies[id]).filter(Boolean);

  const professionalProjectIds = Object.keys(caseStudies).filter(id => !afterHoursProjectIds.includes(id));
  const professionalProjects = professionalProjectIds.map(id => caseStudies[id]).filter(Boolean);

  return (
    <>
      <WornWoodenDeskBackground />
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      {selectedCaseStudyId && isMobile ? (
        <CaseStudyPage caseStudy={selectedCaseStudy} onClose={handleCloseModal} isMobile={isMobile} />
      ) : (
        <>
          <Layout>
            <Header />
            <Hero />
            <ProjectSection title="After-Hours Atelier" projects={personalProjects} onProjectClick={handleProjectClick} />
            <ProjectSection title="Professional Case Studies" projects={professionalProjects} onProjectClick={handleProjectClick} />
            <About />
            <FileCabinet />
            <Footer />
            {/* Dummy section for sufficient scrollable content */}
            <div style={{ height: '200vh' }}></div>
          </Layout>
          <CaseStudyModal isOpen={isModalOpen} onClose={handleCloseModal} caseStudy={selectedCaseStudy} />
        </>
      )}
    </>
  );
}

export default App;