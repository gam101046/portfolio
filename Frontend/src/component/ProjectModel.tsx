// src/component/ProjectModel.tsx
import React from "react";
import { Github, ExternalLink, X } from "lucide-react";
import type { Project } from "../data/projects";
import ImageCarousel from "../component/imageCarousel";

interface Props {
project: Project;
onClose: () => void;
}

const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
// เตรียม array ของ images ให้เป็น {url, title?}
// เตรียม array ของ images ให้เป็น { url, title? }
const carouselImages = (project.image || []).map((src: string, idx: number) => ({
  url: src,
  title: project.titlegallery?.[idx],
}));

return (
    <div
    className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-colors"
    onClick={onClose}
    >
    <div
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl max-w-md md:max-w-xl lg:max-w-2xl w-full max-h-[90vh] shadow-2xl flex flex-col overflow-hidden transition-colors"
        onClick={(e) => e.stopPropagation()}
    >
        {/* Header Carousel (ใช้ carouselImages) */}
        <div className="relative flex-shrink-0 p-4">
        <ImageCarousel images={carouselImages} />
        <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full p-2 shadow-lg backdrop-blur-sm border border-slate-200 dark:border-white/10 transition-colors"
        >
            <X className="w-6 h-6" />
        </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1">
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">{project.title}</h2>

            <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
                <span
                key={tag}
                className="px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium rounded-full"
                >
                {tag}
                </span>
            ))}
            </div>

            <h3 className="text-xl font-semibold mb-4 text-cyan-600 dark:text-cyan-400">{project.projecttype}</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{project.fullDescription}</p>

            <ul className="space-y-3 mb-8">
            {project.features.map((f, i) => (
                <li key={i} className="flex items-start text-slate-600 dark:text-slate-400">
                <span className="mr-3 text-indigo-500">❖</span> {f}
                </li>
            ))}
            </ul>


            {/* Buttons */}
            <div className="flex gap-4 pt-6 border-t border-slate-200 dark:border-white/10">
            {project.github && (
                <a
                href={project.github}
                className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                <Github className="w-5 h-5" /> View Code
                </a>
            )}
            {project.demo && (
                <a
                href={project.demo}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all"
                >
                <ExternalLink className="w-5 h-5" /> Live Demo
                </a>
            )}
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default ProjectModal;