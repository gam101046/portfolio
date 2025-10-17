import { Github, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";


interface Props {
    project: Project;
    onClick?: () => void;
}

const ProjectCard: React.FC<Props> = ({ project, onClick }) => (
<div
    className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
    onClick={onClick}
>
    <div className="relative h-48 bg-gray-100 overflow-hidden">
    <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
    />
    </div>
    <div className="p-6">
    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
        <span key={tag} className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full">
            {tag}
        </span>
        ))}
    </div>
    <div className="flex gap-3">
        {project.github && (
        <a href={project.github} className="flex items-center gap-2 text-sm font-medium hover:opacity-70">
            <Github className="w-4 h-4" /> Code
        </a>
        )}
        {project.demo && (
        <a href={project.demo} className="flex items-center gap-2 text-sm font-medium hover:opacity-70">
            <ExternalLink className="w-4 h-4" /> Demo
        </a>
        )}
    </div>
    </div>
</div>
);

export default ProjectCard;