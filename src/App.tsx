import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import About from './components/About';
import FileCabinet from './components/FileCabinet';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import { caseStudies, CaseStudy } from './data/caseStudies';
import pokemonCapturedSound from '../public/audio/pokemon-captured.mp3';
import engineIgnitionSound from '../public/audio/engine-ignition.mp3';
import f1FlybySound from '../public/audio/f1-flyby.mp3';

function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

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

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

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
    setSelectedCaseStudy(null);
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
    const projectData = caseStudies[projectId];
    console.log('Selected case study data:', projectData);
    setSelectedCaseStudy(projectData);
    setIsModalOpen(true);
    console.log('isModalOpen after setting:', true);
  };

  const afterHoursProjectIds = ['pokedex-app', 'auto-dashboard', 'f1-data-analytics'];
  const personalProjects = afterHoursProjectIds.map(id => caseStudies[id]).filter(Boolean);

  const professionalProjectIds = Object.keys(caseStudies).filter(id => !afterHoursProjectIds.includes(id));
  const professionalProjects = professionalProjectIds.map(id => caseStudies[id]).filter(Boolean);

  return (
    <>
      {loading && (
        <div id="preloader" className="preloader">
          <p className="font-hand">Sketching...</p>
        </div>
      )}
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <Layout>
        <Header />
        <Hero />
        <ProjectSection title="After-Hours Atelier" projects={personalProjects} onProjectClick={handleProjectClick} />
        <ProjectSection title="Professional Case Studies" projects={professionalProjects} onProjectClick={handleProjectClick} />
        <About />
        <FileCabinet />
        <Footer />
      </Layout>
      <CaseStudyModal isOpen={isModalOpen} onClose={handleCloseModal} caseStudy={selectedCaseStudy} />
    </>
  );
}

export default App;