import { useRef, useEffect } from 'react';
import ProjectCard, { Project } from './ProjectCard';
import useScrollAnimation from '../hooks/useScrollAnimation';

interface ProjectSectionProps {
  title: string;
  projects: Project[];
  onProjectClick: (projectId: string) => void;
}

const ProjectSection = ({ title, projects, onProjectClick }: ProjectSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const registerElement = useScrollAnimation();

  useEffect(() => {
    if (sectionRef.current) {
      registerElement(sectionRef.current);
    }
  }, [registerElement]);

  return (
    <section ref={sectionRef} className="mb-24 md:mb-32 fade-in-up entrance-rotate-slide" aria-labelledby={`${title.toLowerCase().replace(/\s/g, '-')}-heading`}>
      <h2 id={`${title.toLowerCase().replace(/\s/g, '-')}-heading`} className="font-dancing-script text-4xl font-bold mb-phi text-center dark:text-stone-100 text-shadow-scribbled entrance-jiggle">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <div key={project.id} className="entrance-slide" style={{ animationDelay: `${index * 0.2}s` }}>
            <ProjectCard project={project} onClick={() => onProjectClick(project.id)} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;