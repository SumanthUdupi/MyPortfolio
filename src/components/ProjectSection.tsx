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
    <section ref={sectionRef} className="mb-24 md:mb-32 fade-in-up" aria-labelledby={`${title.toLowerCase().replace(/\s/g, '-')}-heading`}>
      <h2 id={`${title.toLowerCase().replace(/\s/g, '-')}-heading`} className="font-display text-4xl font-bold mb-12 text-center dark:text-stone-100">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} onClick={() => onProjectClick(project.id)} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;