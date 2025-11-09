import React, { useEffect } from 'react';
import { CaseStudy } from '../data/caseStudies';
import { useParams, useNavigate } from 'react-router-dom'; // Assuming react-router-dom for routing

interface CaseStudyPageProps {
  caseStudy: CaseStudy | null;
  onClose: () => void; // To allow closing/navigating back
  isMobile: boolean;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ caseStudy, onClose, isMobile }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!caseStudy) {
    // Optionally, navigate to a 404 page or home if case study is not found
    return (
      <div className="container mx-auto p-8 text-center dark:text-stone-100">
        <h2 className="text-2xl font-bold">Case Study Not Found</h2>
        <button onClick={() => navigate('/')} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Go Home</button>
      </div>
    );
  }

  return (
    <div className="case-study-page container mx-auto p-4 md:p-8 lg:p-12 max-w-4xl">
      <button
        onClick={onClose}
        className={`back-button fixed z-10 px-4 py-2 bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-full shadow-lg flex items-center space-x-2 ${isMobile ? 'bottom-4 left-4' : 'top-4 left-4'}`}
        aria-label="Back to projects"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Back</span>
      </button>

      <div className="paper relative p-8 md:p-12 rounded-lg shadow-2xl mt-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 dark:text-stone-100">{caseStudy.title}</h1>
        <p className="font-body text-xl text-stone-600 mb-8 dark:text-stone-400">{caseStudy.hook}</p>

        <img src={caseStudy.imageUrl} alt={caseStudy.title} className="w-full h-auto rounded-lg mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-sm font-mono text-stone-600 dark:text-stone-400">
          <div><strong>Role:</strong> {caseStudy.context.role}</div>
          <div><strong>Team:</strong> {caseStudy.context.team}</div>
          <div><strong>Timeline:</strong> {caseStudy.context.timeline}</div>
          <div>
            <strong>Toolkit:</strong>
            {caseStudy.context.toolkit.split(', ').map((item: string, index: number) => (
              <span key={index} className="toolkit-tag mr-2 mb-2 inline-block">{item}</span>
            ))}
            {caseStudy.id === 'f1-data-analytics' && (
              <span className="toolkit-tag tag-adrenaline mr-2 mb-2 inline-block">Adrenaline</span>
            )}
          </div>
        </div>

        <div className="prose prose-lg max-w-none prose-manifesto space-y-6">
          <div>
            <h4 className="about-section-header">{caseStudy.problem.title}</h4>
            <p>{caseStudy.problem.body}</p>
          </div>
          <div>
            <h4 className="about-section-header">{caseStudy.investigation.title}</h4>
            <p>{caseStudy.investigation.body}</p>
          </div>
          <div>
            <h4 className="about-section-header">{caseStudy.solution.title}</h4>
            <p>{caseStudy.solution.body}</p>
          </div>
          <div>
            <h4 className="about-section-header">{caseStudy.results.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: caseStudy.results.body }} />
          </div>
          <div>
            <h4 className="about-section-header">{caseStudy.reflection.title}</h4>
            <p>{caseStudy.reflection.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
