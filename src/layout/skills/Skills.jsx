import "./Skills.css";
import techStack from "../../data/techStack.js";
import Tool from "../../components/tools/Tool.jsx";

function Skills() {
  return (
    <section className="skills">
      <span className="lil-title">Tech-Stack</span>
      {techStack.map((tech, index) => {
        return (
          <Tool
            key={index}
            name={tech.name}
            link={tech.link}
            icon={tech.icon}
            rate={tech.rate}
          />
        );
      })}
    </section>
  );
}

export default Skills;
