import { useState } from "react";
import "./Project.css";
import EmphasizedText from "../emphasized-text/EmphasizedText.jsx";
import iconMap from "../../data/iconMap.js";

function Project(props) {
  const [isOpen, setIsOpen] = useState(false);
  const Website = iconMap["Website"];
  const SourceCode = iconMap["Github"];
  const Close = iconMap["Close"];
  const Share = iconMap["Share"];
  const Preview = iconMap["Preview"];
  const Telegram = iconMap["Telegram"];
  const Linkedin = iconMap["Linkedin"];
  const Facebook = iconMap["Facebook"];
  const Email = iconMap["Email"];
  const Reddit = iconMap["Reddit"];
  const WhatsApp = iconMap["Whatsapp"];
  const X = iconMap["X"];

  function toggleShare() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="project">
      <div className="img-wrapper">
        <Preview className="preview" />
        <img
          src={props.image}
          alt={`${props.title} project preview`}
          width={1280}
          height={720}
          loading="lazy"
        />
      </div>
      <div className="info-wrapper">
        <span className="project-title">
          <EmphasizedText text={props.title} />
        </span>
        <p className="description">{props.description}</p>
        <div className="tech-used">
          <span className="tech-stack">Technologies Used</span>
          {props.techStack.map((tech, index) => {
            let Icon = iconMap[tech.icon];
            return (
              <span key={index} className="technology">
                <Icon />
                {tech.name}
              </span>
            );
          })}
        </div>
      </div>
      <div className="link-button">
        <a
          href={props.link}
          className="btn live-preview"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit my ${props.title}`}
        >
          <Website className="preview" />
          Preview
        </a>
        <a
          href={props.repo}
          className="btn source-code"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit my ${props.title} repository`}
        >
          <SourceCode />
          Source Code
        </a>
        <div className="share" onClick={toggleShare}>
          {isOpen ? <Close /> : <Share />}
          <div className={`share-links ${isOpen ? "open" : ""}`}>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${props.link}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share ${props.title} project via LinkedIn`}
            >
              <Linkedin className="share-icons" /> LinkedIn
            </a>

            <a
              href={`https://api.whatsapp.com/send?text=Check%20out%20this%20awesome%20project!%20${props.link}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share ${props.title} project via WhatsApp`}
            >
              <WhatsApp className="share-icons" /> WhatsApp
            </a>

            <a
              href={`https://t.me/share/url?url=${props.link}&text=Check%20out%20this%20awesome%20project!`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share ${props.title} project via Telegram`}
            >
              <Telegram className="share-icons" /> Telegram
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${props.link}&text=Check%20out%20this%20awesome%20project!`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share ${props.title} project via X`}
            >
              <X className="share-icons" /> X
            </a>

            <a
              href={`https://www.reddit.com/submit?url=${props.link}&title=Check%20out%20this%20awesome%20project!`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share ${props.title} project via Reddit`}
            >
              <Reddit className="share-icons" /> Reddit
            </a>

            <a
              href={`mailto:?subject=Awesome%20Project&body=Check%20out%20this%20awesome%20project!%20${props.link}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share ${props.title} project via Email`}
            >
              <Email className="share-icons" /> Email
            </a>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${props.link}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share ${props.title} project via Facebook`}
            >
              <Facebook className="share-icons" /> Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
