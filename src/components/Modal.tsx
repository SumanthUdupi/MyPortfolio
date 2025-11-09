import React from 'react';
import { CaseStudy } from '../data/caseStudies';

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  currentProject: CaseStudy | undefined;
  selectedProject: string | null;
}

const Modal: React.FC<ModalProps> = ({ isModalOpen, closeModal, currentProject, selectedProject }) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    <div id="modal" className={`modal modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 ${isModalOpen ? 'is-open' : 'invisible opacity-0'}`} aria-modal="true" role="dialog" onClick={closeModal}>
        <div className={`modal-content paper relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl ${isModalOpen ? 'is-open' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button id="close-modal" className="modal-close-button absolute top-4 right-4 text-stone-400 z-10" aria-label="Close case study" onClick={closeModal} onTouchStart={(e) => e.preventDefault()}>
                X
            </button>
            
            <div id="modal-content-target">
              {currentProject && (
                <div className="p-8 md:p-12">
                  <img src={currentProject.imageUrl} alt={currentProject.title} className="w-full rounded-md mb-6 shadow-md" data-animate />
                  {selectedProject === 'project-1' && (
                    <div className="pikachu-container">
                      <div className="pikachu-walk"></div>
                    </div>
                  )}
                  <h2 className="font-display text-4xl font-bold mb-4 text-stone-800 dark:text-stone-100" data-animate>{currentProject.title}</h2>
                  <p className="font-hand text-xl text-stone-600 mb-6 dark:text-stone-400" data-animate>{currentProject.hook}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-center" data-animate>
                      <div className="bg-stone-100 dark:bg-stone-700 p-4 rounded-md">
                          <h4 className="font-mono text-sm uppercase text-stone-500 dark:text-stone-400 mb-1">Role</h4>
                          <p className="font-body font-medium text-stone-700 dark:text-stone-200">{currentProject.context.role}</p>
                      </div>
                      <div className="bg-stone-100 dark:bg-stone-700 p-4 rounded-md">
                          <h4 className="font-mono text-sm uppercase text-stone-500 dark:text-stone-400 mb-1">Team</h4>
                          <p className="font-body font-medium text-stone-700 dark:text-stone-200">{currentProject.context.team}</p>
                      </div>
                      <div className="bg-stone-100 dark:bg-stone-700 p-4 rounded-md">
                          <h4 className="font-mono text-sm uppercase text-stone-500 dark:text-stone-400 mb-1">Timeline</h4>
                          <p className="font-body font-medium text-stone-700 dark:text-stone-200">{currentProject.context.timeline}</p>
                      </div>
                      <div className="bg-stone-100 dark:bg-stone-700 p-4 rounded-md">
                          <h4 className="font-mono text-sm uppercase text-stone-500 dark:text-stone-400 mb-1">Toolkit</h4>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {currentProject.context.toolkit.split(', ').map((tag: string, index: number) => (
                              <span key={index} className={`toolkit-tag ${tag === 'Adrenaline' ? 'tag-adrenaline' : ''}`}>{tag}</span>
                            ))}
                          </div>
                      </div>
                  </div>

                  <div className="prose prose-lg max-w-none space-y-6 prose-manifesto" data-animate>
                      <div>
                          <h3 className="font-display text-2xl mb-2 about-section-header">{currentProject.problem.title}</h3>
                          <p dangerouslySetInnerHTML={{ __html: currentProject.problem.body }}></p>
                      </div>
                      <div>
                          <h3 className="font-display text-2xl mb-2 about-section-header">{currentProject.investigation.title}</h3>
                          <p>{currentProject.investigation.body}</p>
                      </div>
                      <div>
                          <h3 className="font-display text-2xl mb-2 about-section-header">{currentProject.solution.title}</h3>
                          <p>{currentProject.solution.body}</p>
                      </div>
                      <div>
                          <h3 className="font-display text-2xl mb-2 about-section-header">{currentProject.results.title}</h3>
                          <div className="font-body text-stone-700 dark:text-stone-300" dangerouslySetInnerHTML={{ __html: currentProject.results.body }}></div>
                      </div>
                      <div>
                          <h3 className="font-display text-2xl mb-2 about-section-header">{currentProject.reflection.title}</h3>
                          <p>{currentProject.reflection.body}</p>
                      </div>
                  </div>
                </div>
              )}
            </div>
        </div>
    </div>
  );
};

export default Modal;
