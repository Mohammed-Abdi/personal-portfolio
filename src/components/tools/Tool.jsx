import iconMap from "../../data/iconMap";
import "./Tool.css";

function Tool({ icon, name, experience }) {
  const Icon = iconMap[icon];
  return (
    <div className="tool">
      <Icon />
      <div className="tech-info">
        <span>{name}</span>
        <span className="experience">{`${experience} exp`}</span>
      </div>
    </div>
  );
}

export default Tool;
