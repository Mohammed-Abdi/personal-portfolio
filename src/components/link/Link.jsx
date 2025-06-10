import { Icon } from "@iconify/react";
import "./Link.css";

function Link(props) {
  return (
    <a href={props.link} target="_blank" className="social-link">
      <Icon icon={props.icon} className="social-link-icon" />
      <div className="social-link-detail-wrapper">
        <span className="social-media-name">{props.name}</span>
        <span className="username">{props.username}</span>
      </div>
    </a>
  );
}

export default Link;
