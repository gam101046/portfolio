import { useState } from "react";
import type { Project } from "./../../data/projects";
import { projects } from "./../../data/projects";
import  Header  from "../../component/Header";
import  Hero  from "../../component/Hero";
import  Filter from "../../component/Filter";
import ProjectsGrid from "../../component/ProjectsGrid";
import ProjectModal from "../../component/ProjectModel";
import { Footer } from "../../component/Footer";
import Acvitive from "../../component/acvitive";

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
    const filtered = selectedCategory === "all" ? projects : projects.filter(p => p.tags.includes(selectedCategory));

return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-300 selection:bg-indigo-500/30 transition-colors duration-500">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 dark:bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none transition-colors duration-500" />
    <div className="relative z-10">
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        <Header />
        <Hero />
        <Acvitive />
        <Filter tags={allTags} selected={selectedCategory} onSelect={setSelectedCategory} />
        <ProjectsGrid projects={filtered} onSelect={setSelectedProject} />
        <Footer />
    </div>
    </div>
);
};

export default App;

