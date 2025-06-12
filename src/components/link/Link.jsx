import { Icon } from "@iconify/react";
import "./Link.css";

function Link(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      className="social-link"
      aria-label={`Visit my ${props.name}`}
    >
      <Icon icon={props.icon} className="social-link-icon" />
      <div className="social-link-detail-wrapper">
        <span className="tool-tip">{props.name}</span>
      </div>
    </a>
  );
}

export default Link;
