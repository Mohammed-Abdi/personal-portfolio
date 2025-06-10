import "./Tool.css";
import { Icon } from "@iconify/react";

function Tool(props) {
  return (
    <a href={props.link} className="tool">
      <Icon icon={props.icon} className="icon" />
      <div className="tech-info">
        <span>{props.name}</span>
        <div className="tube">
          <div className="fill" style={{ width: `${props.rate}%` }}></div>
        </div>
        <span className="percentage">{props.rate}%</span>
      </div>
    </a>
  );
}

export default Tool;
