import type { Project } from "../data/projects";
import  ProjectCard  from "./ProjectCard";


interface Props {
    projects: Project[];
    onSelect: (project: Project) => void;
}

const ProjectsGrid: React.FC<Props> = ({ projects, onSelect }) => (
<section className="max-w-6xl mx-auto px-6 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onClick={() => onSelect(project)} />
    ))}
    </div>
</section>
);

export default ProjectsGrid;