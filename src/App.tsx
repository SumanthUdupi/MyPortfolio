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
import pokemonCapturedSound from '/audio/pokemon-captured.mp3';
import engineIgnitionSound from '/audio/engine-ignition.mp3';
import f1FlybySound from '/audio/f1-flyby.mp3';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    console.log("🎮 Secret Portfolio Easter Eggs - Riddle Edition");
    console.log("10 hidden treasures await. Can you crack the codes?");
    console.log("1. The Gamer's Salute: Arrow keys dance up, up, down, down, left, right, left, right, then two letters close the spell. What code from the 80s turns this portfolio into a hand-drawn tale?");
    console.log("2. The Pickle's Flash: A testing framework's name, green and crunchy. Type it out and watch the screen get... lunchy?");
    console.log("3. The Designer's Balloon: Where UI dreams are made, five letters spell the tool. Type its name and watch a logo float—think it's cool?");
    console.log("4. The Data Wizard's Query: Three letters that pull data from tables with care. Type them fast for a popup that queries \"impressed\" visitors there.");
    console.log("5. Gotta Type 'Em All: Seven letters, a digital encyclopedia of pocket monsters. Say it aloud and hear \"Who's that...?\" from your computer's speakers.");
    console.log("6. The Console Welcomer: Open the developer's secret chamber (F12). A message awaits: \"Welcome, fellow analyst!\" it says with a wink chamber.");
    console.log("7. The ASCII Artist: In the same hidden console, a caffeinated drawing appears—or perhaps a writing tool. Made of symbols and characters, never pixels, always cool.");
    console.log(`
          ( (
         ) )
      .........
      |       |]
      \       /
       \`-----\`
    `);
    console.log("8. The Hiring Function: Still in console-land, a function beckons with 6 letters and 2 humps in its name. Call upon it to send an email of career-seeking fame.");
    console.log("Type hireMe() to get in touch.");
    (window as any).hireMe = () => { window.location.href = 'mailto:sumanthudupi858@gmail.com?subject=I found your console Easter Egg!'; };
    console.log("9. The Sleepy Roadblock: Check the console again—a wild creature blocks your way! This lazy Pokémon in the code decided to stay.");
    console.log("A wild Snorlax blocks the path! (Just kidding, it's just my code.)");
    console.log("10. The Developer's X-Ray: Hold a single letter key (the one that starts \"developer\"). Red outlines reveal the skeleton of every container, whatever the weather.");
    console.log("How many can you find? Happy hunting! 🕵️");
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