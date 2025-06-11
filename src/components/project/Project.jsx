import "./Project.css";
import { Icon } from "@iconify/react";

function Project(props) {
  return (
    <a href={props.link} className="project" target="_blank">
      <div className="img-wrapper">
        <Icon icon="ph:image-square" className="image-icon" />
        <img
          src={props.image}
          alt={props.title}
          loading="lazy"
          width={1280}
          height={720}
        />
      </div>
      <div className="info-wrapper">
        <span className="project-title">{props.title}</span>
        <p className="description">{props.description}</p>
        <div className="tech-used">
          <span className="tech-stack">Technologies Used</span>
          {props.techStack.map((tech, index) => {
            return (
              <span key={index} className="technology">
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </a>
  );
}

export default Project;
