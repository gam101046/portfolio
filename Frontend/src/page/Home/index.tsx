import { useState } from "react";
import type { Project } from "./../../data/projects";
import { projects } from "./../../data/projects";
import  Header  from "../../component/Header";
import  Hero  from "../../component/Hero";
import  Filter from "../../component/Filter";
import ProjectsGrid from "../../component/ProjectsGrid";
import ProjectModal from "../../component/ProjectModel";
import { Footer } from "../../component/Footer";

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
    const filtered = selectedCategory === "all" ? projects : projects.filter(p => p.tags.includes(selectedCategory));

return (
    <div className="min-h-screen bg-white text-black">
    {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    <Header />
    <Hero />
    <Filter tags={allTags} selected={selectedCategory} onSelect={setSelectedCategory} />
    <ProjectsGrid projects={filtered} onSelect={setSelectedProject} />
    <Footer />
    </div>
);
};

export default App;

