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
    className="fixed inset-0 bg-black/30 bg-opacity-50 z-50 flex items-center justify-center p-4"
    onClick={onClose}
    >
    <div
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
    >
        {/* Header Carousel (ใช้ carouselImages) */}
        <div className="relative flex-shrink-0 p-4">
        <ImageCarousel images={carouselImages} />
        <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white rounded-full p-2 hover:bg-gray-100 shadow"
        >
            <X className="w-6 h-6" />
        </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1">
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

            <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
                <span
                key={tag}
                className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full"
                >
                {tag}
                </span>
            ))}
            </div>

            <h3 className="text-2xl font-bold mb-4">{project.projecttype}</h3>
            <p className="text-gray-700 mb-6">{project.fullDescription}</p>

            <ul className="space-y-2 mb-6">
            {project.features.map((f, i) => (
                <li key={i} className="flex items-start">
                <span className="mr-2">•</span> {f}
                </li>
            ))}
            </ul>


            {/* Buttons */}
            <div className="flex gap-4 pt-6 border-t">
            {project.github && (
                <a
                href={project.github}
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                <Github className="w-5 h-5" /> View Code
                </a>
            )}
            {project.demo && (
                <a
                href={project.demo}
                className="flex items-center gap-2 px-6 py-3 border-2 border-black rounded-lg hover:bg-black hover:text-white transition"
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