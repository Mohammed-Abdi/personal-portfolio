import type React from "react";
import ProjectCard from "../../../features/project/ProjectCard";

const Projects: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-5 px-5">
      <ProjectCard />
    </section>
  );
};

export default Projects;
