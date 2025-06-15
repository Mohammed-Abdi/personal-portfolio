import "./Tool.css";
import { Icon } from "@iconify/react";

function Tool(props) {
  return (
    <div className="tool">
      <Icon icon={props.icon} className="icon" />
      <div className="tech-info">
        <span>{props.name}</span>
        <div className="tube">
          <div
            className="fill hidden"
            style={{ width: `${props.rate}%` }}
          ></div>
        </div>
        <span className="percentage">{props.rate}%</span>
      </div>
    </div>
  );
}

export default Tool;
