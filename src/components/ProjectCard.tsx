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
  return (
    <div className="project-card relative cursor-pointer group" onClick={onClick}>
      <div className="paper overflow-hidden rounded-md" data-caption={project.caption}>
        <img 
          src={project.imageUrl} 
          alt={`A preview of the ${project.title} project`} 
          className="project-image w-full h-auto object-cover bg-stone-200 dark:bg-stone-700 animate-pulse"
          loading="lazy"
        />
      </div>
      <div className="text-center mt-4 pt-4">
        <h3 className="font-display text-2xl font-bold dark:text-stone-100">{project.title}</h3>
        <p className="font-body text-sm text-stone-600 mb-2 dark:text-stone-400">{project.description}</p>
        <span className="font-hand text-cyan-600 text-lg dark:text-cyan-400">{project.caseStudy}</span>
      </div>
    </div>
  );
};

export default ProjectCard;