import { useEffect, useRef } from 'react';
import { CaseStudy } from '../data/caseStudies';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudy | null;
}

const CaseStudyModal = ({ isOpen, onClose, caseStudy }: CaseStudyModalProps) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.getElementById('main-content')?.classList.add('modal-open');
    } else {
      document.body.style.overflow = '';
      document.getElementById('main-content')?.classList.remove('modal-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.getElementById('main-content')?.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen || !caseStudy) return null;

  return (
    <div id="modal" className={`modal modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 ${isOpen ? 'is-open' : ''}`} aria-modal="true" role="dialog">
      <div ref={modalContentRef} className="modal-content paper relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl">
        <button id="close-modal" className="modal-close-button absolute top-4 right-4 text-stone-400 z-10" aria-label="Close case study" onClick={onClose}>
          X
        </button>
        <div id="modal-content-target" className="p-8 md:p-12">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 dark:text-stone-100">{caseStudy.title}</h3>
          <p className="font-hand text-xl text-stone-600 mb-8 dark:text-stone-400">{caseStudy.hook}</p>
          
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
        {caseStudy.id === 'pokedex-app' && (
          <img 
            src="/images/pikachu-pixel.gif" 
            alt="Pixelated Pikachu walking"
            className="pikachu-walk absolute bottom-4 left-0 h-12 w-auto"
          />
        )}
      </div>
    </div>
  );
};

export default CaseStudyModal;
