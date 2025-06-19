import "./Projects.css";
import projects from "../../data/projects.js";
import Project from "../../components/project/Project.jsx";
import { Icon } from "@iconify/react";
import { useState } from "react";

function Projects() {
  const currentYear = new Date().getFullYear();
  const [search, setSearch] = useState("");
  const [year, setYear] = useState(currentYear);
  const [dropDown, setDropDown] = useState(false);
  function handleFilter(e) {
    setYear(e.target.value);
  }
  function toggleDropDown() {
    setDropDown(!dropDown);
  }
  return (
    <section className="projects hidden">
      <span className="section-title">FEATURED PROJECTS</span>
      <div className="search">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter-button" onClick={toggleDropDown}>
          {year}
          <Icon icon={dropDown ? "fe:drop-up" : "fe:drop-down"} />
          <div className={`years ${dropDown ? "dropped" : ""}`}>
            <button
              value={2025}
              onClick={(e) => {
                handleFilter(e);
                toggleDropDown();
              }}
            >
              2025
            </button>
            <button
              value={2024}
              onClick={(e) => {
                handleFilter(e);
                toggleDropDown();
              }}
            >
              2024
            </button>
          </div>
        </div>
      </div>
      <div className="projects-wrapper">
        {(search === ""
          ? projects.filter((project) => project.year === Number(year))
          : projects.filter((project) =>
              project.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            )
        ).length > 0 ? (
          search === "" ? (
            projects
              .filter((project) => project.year === Number(year))
              .map((project, index) => {
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
              })
          ) : (
            projects
              .filter((project) =>
                project.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((project, index) => {
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
              })
          )
        ) : (
          <div className="not-found">
            <Icon icon="line-md:emoji-frown-open" className="icon" />
            <p>Project not found</p>
          </div>
        )}
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
