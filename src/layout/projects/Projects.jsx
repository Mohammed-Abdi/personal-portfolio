import "./Projects.css";
import projects from "../../data/projects.js";
import Project from "../../components/project/Project.jsx";
import { Icon } from "@iconify/react";

function Projects() {
  return (
    <section className="projects">
      <span className="section-title">FEATURED PROJECTS</span>
      <div className="search">
        <input type="text" id="search" name="search" placeholder="Search..." />
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
              repo={project.repo}
              techStack={project.techStack}
            />
          );
        })}
      </div>
      <a
        href="https://github.com/Mohammed-Abdi?tab=repositories"
        target="_blank"
        className="more-projects"
        aria-label="See more of mohammed's projects in github"
      >
        See More Projects
      </a>
    </section>
  );
}

export default Projects;
