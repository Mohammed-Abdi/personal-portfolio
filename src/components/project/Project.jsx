import "./Project.css";
import { Icon } from "@iconify/react";

function Project(props) {
  return (
    <div className="project">
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
            let icon;
            if (tech == "React") {
              icon = "mdi:react";
            } else if (tech === "Vanilla.js") {
              icon = "ant-design:java-script-outlined";
            } else if (tech.toLowerCase() === "css") {
              icon = "ri:css3-fill";
            } else if (tech === "c++") {
              icon = "mdi:language-cpp";
            } else if (tech.toLowerCase() === "html") {
              icon = "flowbite:html-solid";
            } else {
              console.log(`icon not found for ${tech}`);
            }
            return (
              <span key={index} className="technology">
                <Icon icon={icon} />
                {tech}
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
        >
          <Icon icon="icon-park-outline:share" />
          Preview
        </a>
        <a
          href={props.repo}
          className="btn source-code"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="grommet-icons:github" />
          Source Code
        </a>
        <div className="share">
          <Icon icon="ooui:share" />
          <div className="share-links">
            <>
              <a
                href={`https://t.me/share/url?url=${props.link}&text=Check%20out%20this%20awesome%20project!`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="ri:telegram-2-line" /> Telegram
              </a>

              <a
                href={`mailto:?subject=Awesome%20Project&body=Check%20out%20this%20awesome%20project!%20${props.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="ic:outline-email" /> Email
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${props.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="uil:facebook" /> Facebook
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${props.link}&text=Check%20out%20this%20awesome%20project!`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="ri:twitter-x-line" /> Twitter
              </a>

              <a
                href={`https://www.reddit.com/submit?url=${props.link}&title=Check%20out%20this%20awesome%20project!`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="dashicons:reddit" /> Reddit
              </a>

              <a
                href={`https://api.whatsapp.com/send?text=Check%20out%20this%20awesome%20project!%20${props.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="ic:baseline-whatsapp" /> WhatsApp
              </a>

              {/* LinkedIn */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${props.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="jam:linkedin" /> LinkedIn
              </a>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
