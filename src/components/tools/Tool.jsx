import "./Tool.css";
import { Icon } from "@iconify/react";

function Tool({ icon, name, experience }) {
  return (
    <div className="tool">
      <Icon icon={icon} className="icon" />
      <div className="tech-info">
        <span>{name}</span>
        <span className="experience">{`${experience} exp`}</span>
      </div>
    </div>
  );
}

export default Tool;
