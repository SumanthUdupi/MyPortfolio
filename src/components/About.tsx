import { useRef, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const registerElement = useScrollAnimation();

  useEffect(() => {
    if (sectionRef.current) {
      registerElement(sectionRef.current);
    }
  }, [registerElement]);

  return (
    <section id="about" className="mb-24 fade-in-up" aria-labelledby="about-heading" ref={sectionRef}>
      <div className="paper max-w-4xl mx-auto p-8 md:p-12 lg:p-16 relative transform -rotate-1 shadow-xl bg-[#fcfcfc] dark:bg-stone-700 rounded-md bg-blend-multiply [background-image:url('data:image/svg+xml,%3Csvg_xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter_id=%27paper%27%3E%3CfeTurbulence_type=%27fractalNoise%27_baseFrequency=%270.9%27_numOctaves=%274%27_/%3E%3CfeColorMatrix_type=%27saturate%27_values=%270%27/%3E%3C/filter%3E%3Crect_width=%27100%25%27_height=%27100%25%27_filter=%27url(%23paper)%27_opacity=%270.05%27/%3E%3C/svg%3E')] dark:[background-image:url('data:image/svg+xml,%3Csvg_xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter_id=%27paper%27%3E%3CfeTurbulence_type=%27fractalNoise%27_baseFrequency=%270.9%27_numOctaves=%274%27_/%3E%3CfeColorMatrix_type=%27saturate%27_values=%270%27/%3E%3C/filter%3E%3Crect_width=%27100%25%27_height=%27100%25%27_filter=%27url(%23paper)%27_opacity=%270.1%27/%3E%3C/svg%3E')]">
        <h2 id="about-heading" className="font-dancing-script text-4xl font-bold mb-8 text-center dark:text-stone-100">The Human Behind the Craft</h2>
        <div className="space-y-8 prose prose-lg max-w-none prose-manifesto">
          <div>
            <h3 className="about-section-header font-patrick-hand">The Origin Story</h3>
            <p>My journey began in Systems Engineering and Data Science, but I found my passion in a surprising place: the human gap between technical requirements and real-world users. I was always the one bridging the gap for clients in the automotive and manufacturing sectors, and I realized the 'gap' was almost always a *human* one. I started redesigning complex processes in my notebook, not just for efficiency, but for *clarity* and *joy*. The moment I translated a complex requirement into a simple Figma prototype and saw a stakeholder's face light up... I was hooked.</p>
            <h3 className="about-section-header font-patrick-hand">My Approach as a Partner</h3>
            <p>I'm now a trusted partner through the entire software lifecycle, managing product roadmaps, writing user stories in Gherkin, and leading Agile ceremonies. I'm just as comfortable in Figma with UX teams as I am in Postman validating REST API endpoints.</p>
          </div>
          <div>
            <h3 className="about-section-header font-patrick-hand">The Philosophy</h3>
            <p>I believe design is a non-negotiable blend of empathy, logic, and a dash of the unexpected. It's my job to be the user's loudest advocate and the business's smartest partner. My non-negotiable? <strong className="font-body">"Don't make me think"</strong> is a good start, but <strong className="font-body">"Make me feel"</strong> is where the real connection happens. (And 'make it Gherkin' is where the clarity begins.)</p>
          </div>
          <div>
            <h3 className="about-section-header font-patrick-hand">The Creative Arsenal (My Toolkit)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-mono text-sm font-semibold uppercase text-stone-600 dark:text-stone-400">BA & Strategy</h4>
                <ul className="flex flex-wrap gap-3 mt-2">
                  <li className="toolkit-tag">Azure DevOps</li>
                  <li className="toolkit-tag">Jira</li>
                  <li className="toolkit-tag">Gherkin</li>
                  <li className="toolkit-tag">User Stories</li>
                  <li className="toolkit-tag">BPMN</li>
                  <li className="toolkit-tag">Agile Ceremonies</li>
                  <li className="toolkit-tag">UAT Planning</li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-sm font-semibold uppercase text-stone-600 dark:text-stone-400">Design & Prototyping</h4>
                <ul className="flex flex-wrap gap-3 mt-2">
                  <li className="toolkit-tag">Figma</li>
                  <li className="toolkit-tag">Proto.io</li>
                  <li className="toolkit-tag">Balsamiq</li>
                  <li className="toolkit-tag">Axure</li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-sm font-semibold uppercase text-stone-600 dark:text-stone-400">Data & Analytics</h4>
                <ul className="flex flex-wrap gap-3 mt-2">
                  <li className="toolkit-tag">SQL</li>
                  <li className="toolkit-tag">Power BI</li>
                  <li className="toolkit-tag">Tableau</li>
                  <li className="toolkit-tag">ETL</li>
                  <li className="toolkit-tag">Predictive Analytics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-sm font-semibold uppercase text-stone-600 dark:text-stone-400">Domains & Tools</h4>
                <ul className="flex flex-wrap gap-3 mt-2">
                  <li className="toolkit-tag">ESG</li>
                  <li className="toolkit-tag">EHS</li>
                  <li className="toolkit-tag">QMS</li>
                  <li className="toolkit-tag">ERP</li>
                  <li className="toolkit-tag">Postman</li>
                  <li className="toolkit-tag">REST APIs</li>
                  <li className="toolkit-tag">Zephyr</li>
                  <li className="toolkit-tag">TestRail</li>
                  <li className="toolkit-tag">Smartsheet</li>
                  <li className="toolkit-tag tag-coffee">Too much coffee</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="about-section-header font-patrick-hand">The Human Bits</h3>
            <p>When I'm not writing user stories or querying databases, you can find me trying to perfect a sourdough starter (a study in process), digging through crates of old vinyl (a study in discovery), or getting lost on a hiking trail. What fuels my creativity? Weird documentaries, strong espresso, and the chaos of a public park. (I'm also convinced I can guess the exact right-sized Tupperware for leftovers on the first try. It's a gift.)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;