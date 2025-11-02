import { useState, useRef, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const FileCabinet = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const sectionRef = useRef<HTMLElement>(null);
  const registerElement = useScrollAnimation();

  useEffect(() => {
    if (sectionRef.current) {
      registerElement(sectionRef.current);
    }
  }, [registerElement]);

  const tabs = [
    { id: 'experience', label: '🗂️ Experience' },
    { id: 'highlights', label: '💡 Project Highlights' },
    { id: 'education', label: '🎓 Education' },
    { id: 'certs', label: '🏅 Certifications' },
  ];

  return (
    <section id="professional-files" className="mb-24 fade-in-up" aria-labelledby="files-heading" ref={sectionRef}>
      <h2 id="files-heading" className="font-display text-4xl font-bold mb-12 text-center dark:text-stone-100">The Not-So-Boring Paperwork</h2>
      <div className="file-cabinet paper max-w-4xl mx-auto p-8 md:p-12 lg:p-16 relative transform rotate-1 shadow-xl">
        <div className="file-tabs">
          {tabs.map(tab => (
            <button 
              key={tab.id} 
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="file-content prose max-w-none prose-manifesto">
          <div id="tab-experience" className={`tab-panel ${activeTab === 'experience' ? 'active' : ''}`}>
            <ul>
              <li>
                <h4>Integration Lead & Business Analyst</h4>
                <div className="company-role">RGBSI | Bangalore, India | 07/2023 - Present</div>
                <ul className="details">
                  <li>Authored <strong>200+</strong> Gherkin-based user stories for modules such as PPAP, Non-Conformity, and Risk Assessment.</li>
                  <li>Led Agile ceremonies (sprint planning, backlog grooming, sprint reviews) for a <strong>7-member</strong> cross-functional squad.</li>
                  <li>Partnered with UX teams to prototype EHS and PO Management workflows in Figma, Axure, and Balsamiq.</li>
                  <li>Validated and documented REST APIs using Postman and optimized Swagger/OpenAPI specifications.</li>
                  <li>Created UAT plans in Zephyr for modules including Audit, Work Permit, and Incident Management for major clients in automotive and manufacturing.</li>
                  <li>Queried MSSQL databases to build Superset dashboards tracking adoption of ESG and EHS tools.</li>
                  <li>Oversaw SDLC compliance with GRI, SASB, and OSHA standards.</li>
                </ul>
              </li>
              <li>
                <h4>Advertisement Moderator & Analyst</h4>
                <div className="company-role">Amazon | Bangalore, India | 07/2022-07/2023</div>
                <ul className="details">
                  <li>Analyzed ad violation patterns using Excel and Power BI to support global moderation workflows, contributing to a <strong>150%</strong> increase in operational efficiency.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div id="tab-highlights" className={`tab-panel ${activeTab === 'highlights' ? 'active' : ''}`}>
            <ul className="project-list">
              <li>
                <h4>Scalable EHS Platform</h4>
                <ul className="details">
                  <li>Led end-to-end business analysis, ensuring compliance with GRI and SASB standards.</li>
                  <li>Delivered a solution that cut client audit prep time by <strong>40%</strong>.</li>
                  <li><strong>Toolkit:</strong> Jira, Gherkin, Figma, Power BI</li>
                </ul>
              </li>
              <li>
                <h4>Enterprise QMS Modules</h4>
                <ul className="details">
                  <li>Gathered requirements for PPAP and Non-Conformity modules.</li>
                  <li>Streamlined complex lab test data workflows for global industry leaders.</li>
                  <li><strong>Toolkit:</strong> Azure DevOps, Gherkin, Postman, SQL</li>
                </ul>
              </li>
              <li>
                <h4>Power BI Performance Dashboards</h4>
                <ul className="details">
                  <li>Developed interactive dashboards to track process performance metrics across ESG, CAPA, and risk modules.</li>
                  <li><strong>Toolkit:</strong> Power BI, SQL, ETL</li>
                </ul>
              </li>
              <li>
                <h4>OEM API Integration</h4>
                <ul className="details">
                  <li>Authored detailed API requirements for third-party systems, automating PPAP, product lifecycle and test result syncing.</li>
                  <li><strong>Toolkit:</strong> Postman, REST APIs, Swagger</li>
                </ul>
              </li>
              <li>
                <h4>AI/ML in Compliance</h4>
                <ul className="details">
                  <li>Spearheaded analysis for integrating AI/ML models into compliance risk modules.</li>
                  <li>Initial analysis proved a <strong>20%</strong> improvement in early risk detection.</li>
                  <li><strong>Toolkit:</strong> SQL, Power BI, Jira, Predictive Analytics</li>
                </ul>
              </li>
            </ul>
          </div>
          <div id="tab-education" className={`tab-panel ${activeTab === 'education' ? 'active' : ''}`}>
            <ul className="education-list">
              <li>
                <h4>Post Graduate Diploma, Data Science</h4>
                <div className="company-role">Steinbeis University, Germany (Completed 2022)</div>
              </li>
              <li>
                <h4>B.E, Mechanical Engineering</h4>
                <div className="company-role">Dayananda Sagar College (2017-2021)</div>
              </li>
            </ul>
          </div>
          <div id="tab-certs" className={`tab-panel ${activeTab === 'certs' ? 'active' : ''}`}>
            <ul className="certs-list">
              <li>
                <h4>Google UX Design Professional Certificate</h4>
                <div className="company-role">Google (Expected 2025)</div>
              </li>
              <li>
                <h4>Microsoft Certified: Business Analyst Associate</h4>
                <div className="company-role">Microsoft and LinkedIn (Expected 2025)</div>
              </li>
              <li>
                <h4>Atlassian Certified: Agile Project Management</h4>
                <div className="company-role">Atlassian (Expected 2025)</div>
              </li>
              <li>
                <h4>IBM Machine Learning with Python</h4>
                <div className="company-role">IBM (2024)</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileCabinet;