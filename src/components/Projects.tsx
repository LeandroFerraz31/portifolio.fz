import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../children/ProjectCard";
import ShowMoreButton from "../children/ShowMoreButton";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Projetos Selecionados
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluções completas desenvolvidas com as mais modernas tecnologias
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Botão Ver Mais */}
        {!showAllProjects && projects.length > 2 && (
          <div className="text-center mt-12">
            <ShowMoreButton onClick={() => setShowAllProjects(true)} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;