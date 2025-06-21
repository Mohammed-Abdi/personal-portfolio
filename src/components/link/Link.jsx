import "./Link.css";
import iconMap from "../../data/iconMap.js";

function Link({ name, link }) {
  let Icon = iconMap[name];
  return (
    <a
      href={link}
      target="_blank"
      className="social-link"
      aria-label={`Visit my ${name}`}
    >
      <Icon />
      <div className="social-link-detail-wrapper">
        <span className="tool-tip">{name}</span>
      </div>
    </a>
  );
}

export default Link;
