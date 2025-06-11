import "./Projects.css";
import projects from "../../data/projects.js";
import Project from "../../components/project/Project.jsx";
import { Icon } from "@iconify/react";

function Projects() {
  return (
    <section className="projects">
      <span className="recent-project">FEATURED PROJECTS</span>
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button className="filter">
          <Icon icon="ep:filter" className="filter-icon" />
          Filter
        </button>
      </div>
      <div className="projects-wrapper">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              image={project.img}
              title={project.title}
              description={project.description}
              link={project.link}
              techStack={project.techStack}
            />
          );
        })}
      </div>
      <button className="more-projects">See More</button>
    </section>
  );
}

export default Projects;
