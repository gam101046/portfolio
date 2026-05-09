import { Github, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
import { motion } from "framer-motion";

interface Props {
    project: Project;
    onClick?: () => void;
}

const ProjectCard: React.FC<Props> = ({ project, onClick }) => (
<motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
    className="group bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all cursor-pointer"
    onClick={onClick}
>
    <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-10 dark:opacity-60 transition-opacity"></div>
    <img
        src={project.image[0]}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
    />
    </div>
    <div className="p-6 relative z-20">
    <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>
    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
        <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full">
            {tag}
        </span>
        ))}
    </div>
    <div className="flex gap-4">
        {project.github && (
        <a href={project.github} onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Github className="w-4 h-4" /> <span className="underline decoration-indigo-500/30 dark:decoration-indigo-500/50 underline-offset-4">Code</span>
        </a>
        )}
        {project.demo && (
        <a href={project.demo} onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
            <ExternalLink className="w-4 h-4" /> <span className="underline decoration-cyan-500/30 dark:decoration-cyan-500/50 underline-offset-4">Demo</span>
        </a>
        )}
    </div>
    </div>
</motion.div>
);

export default ProjectCard;