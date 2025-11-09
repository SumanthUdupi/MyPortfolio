import { useState } from 'react';
import useIsMobile from '../hooks/useIsMobile';

export interface Project {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  description: string;
  caseStudy: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const isMobile = useIsMobile();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="project-card paper relative cursor-pointer group" onClick={onClick} style={{'--card-rotation': '0deg'} as React.CSSProperties}>
      <div className="overflow-hidden rounded-md border-[12px] border-b-[48px] border-stone-100 dark:border-stone-800 dark:bg-stone-800 shadow-[0_4px_12px_rgba(0,0,0,0.15),_inset_0_0_0_1px_rgba(0,0,0,0.05)] relative" data-caption={project.caption}>
        <img
          src={project.imageUrl}
          alt={`A preview of the ${project.title} project`}
          className={`project-image w-full h-auto object-cover bg-stone-200 dark:bg-stone-700 ${imageLoaded ? '' : 'animate-pulse'}`}
          loading={isMobile ? "lazy" : "eager"}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="text-center mt-2 pt-2 sm:mt-3 sm:pt-3 md:mt-4 md:pt-4">
        <h3 className="font-display text-xl sm:text-xl md:text-2xl font-bold dark:text-stone-100">{project.title}</h3>
        <p className="font-body text-sm text-stone-600 mb-1 md:mb-2 dark:text-stone-400">{project.description}</p>
        <span className="font-body text-cyan-600 text-base sm:text-md md:text-lg dark:text-cyan-400">{project.caseStudy}</span>
      </div>
    </div>
  );
};

export default ProjectCard;