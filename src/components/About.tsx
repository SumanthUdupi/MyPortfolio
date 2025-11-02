import { useRef, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import binderClipSound from '../../public/audio/binder-clip.mp3';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const registerElement = useScrollAnimation();

  useEffect(() => {
    if (sectionRef.current) {
      registerElement(sectionRef.current);
    }
  }, [registerElement]);

  const handleBinderClipClick = () => {
    const audio = new Audio(binderClipSound);
    audio.play().catch(error => console.error("Error playing sound:", error));
  };

  return (
    <section id="about" className="mb-24 fade-in-up" aria-labelledby="about-heading" ref={sectionRef}>
      <div className="paper max-w-4xl mx-auto p-8 md:p-12 lg:p-16 relative transform -rotate-1 shadow-xl">
        <svg id="binder-clip" className="bg-item" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" onClick={handleBinderClipClick}>
          <defs>
            <linearGradient id="metal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#b0b0b0' }} />
              <stop offset="50%" style={{ stopColor: '#f0f0f0' }} />
              <stop offset="100%" style={{ stopColor: '#b0b0b0' }} />
            </linearGradient>
          </defs>
          <path d="M 20 50 L 80 50 L 80 80 C 80 91.0457 71.0457 100 60 100 L 40 100 C 28.9543 100 20 91.0457 20 80 Z" fill="#44403c" />
          <path d="M 30 50 C 30 38.9543 38.9543 30 50 30 C 61.0457 30 70 38.9543 70 50" stroke="url(#metal)" strokeWidth="8" fill="none" strokeLinecap="round" />
        </svg>
        <h2 id="about-heading" className="font-display text-4xl font-bold mb-8 text-center dark:text-stone-100">The Human Behind the Craft</h2>
        <div className="space-y-8 prose prose-lg max-w-none prose-manifesto">
          <div>
            <h3 className="about-section-header">The Origin Story</h3>
            <p>My journey began in Systems Engineering and Data Science, but I found my passion in a surprising place: the human gap between technical requirements and real-world users. I was always the one bridging the gap for clients in the automotive and manufacturing sectors, and I realized the 'gap' was almost always a *human* one. I started redesigning complex processes in my notebook, not just for efficiency, but for *clarity* and *joy*. The moment I translated a complex requirement into a simple Figma prototype and saw a stakeholder's face light up... I was hooked.</p>
            <h3 className="about-section-header">My Approach as a Partner</h3>
            <p>I'm now a trusted partner through the entire software lifecycle, managing product roadmaps, writing user stories in Gherkin, and leading Agile ceremonies. I'm just as comfortable in Figma with UX teams as I am in Postman validating REST API endpoints.</p>
          </div>
          <div>
            <h3 className="about-section-header">The Philosophy</h3>
            <p>I believe design is a non-negotiable blend of empathy, logic, and a dash of the unexpected. It's my job to be the user's loudest advocate and the business's smartest partner. My non-negotiable? <strong className="font-hand">"Don't make me think"</strong> is a good start, but <strong className="font-hand">"Make me feel"</strong> is where the real connection happens. (And 'make it Gherkin' is where the clarity begins.)</p>
          </div>
          <div>
            <h3 className="about-section-header">The Creative Arsenal (My Toolkit)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-mono text-sm font-semibold uppercase text-stone-600 dark:text-stone-400">BA & Strategy</h4>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="toolkit-tag">Azure DevOps</span>
                  <span className="toolkit-tag">Jira</span>
                  <span className="toolkit-tag">Gherkin</span>
                  <span className="toolkit-tag">User Stories</span>
                  <span className="toolkit-tag">BPMN</span>
                  <span className="toolkit-tag">Agile Ceremonies</span>
                  <span className="toolkit-tag">UAT Planning</span>
                </div>
              </div>
              <div>
                <h4 className="font-mono text-sm font-semibold uppercase text-stone-600 dark:text-stone-400">Design & Prototyping</h4>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="toolkit-tag">Figma</span>
                  <span className="toolkit-tag">Proto.io</span>
                  <span className="toolkit-tag">Balsamiq</span>
                  <span className="toolkit-tag">Axure</span>
                </div>
              </div>
              <div>
                <h4 className="font-mono text-sm font-semibold uppercase text-stone-600 dark:text-stone-400">Data & Analytics</h4>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="toolkit-tag">SQL</span>
                  <span className="toolkit-tag">Power BI</span>
                  <span className="toolkit-tag">Tableau</span>
                  <span className="toolkit-tag">ETL</span>
                  <span className="toolkit-tag">Predictive Analytics</span>
                </div>
              </div>
              <div>
                <h4 className="font-mono text-sm font-semibold uppercase text-stone-600 dark:text-stone-400">Domains & Tools</h4>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="toolkit-tag">ESG</span>
                  <span className="toolkit-tag">EHS</span>
                  <span className="toolkit-tag">QMS</span>
                  <span className="toolkit-tag">ERP</span>
                  <span className="toolkit-tag">Postman</span>
                  <span className="toolkit-tag">REST APIs</span>
                  <span className="toolkit-tag">Zephyr</span>
                  <span className="toolkit-tag">TestRail</span>
                  <span className="toolkit-tag">Smartsheet</span>
                  <span className="toolkit-tag tag-coffee">Too much coffee</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="about-section-header">The Human Bits</h3>
            <p>When I'm not writing user stories or querying databases, you can find me trying to perfect a sourdough starter (a study in process), digging through crates of old vinyl (a study in discovery), or getting lost on a hiking trail. What fuels my creativity? Weird documentaries, strong espresso, and the chaos of a public park. (I'm also convinced I can guess the exact right-sized Tupperware for leftovers on the first try. It's a gift.)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;