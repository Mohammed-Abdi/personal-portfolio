import "./Skills.css";
import techStack from "../../data/techStack.js";
import Tool from "../../components/tools/Tool.jsx";

function Skills() {
  return (
    <section className="skills hidden">
      {/* <span className="lil-title">Tech-Stack</span> */}
      {techStack.map((tech, index) => {
        return (
          <Tool
            key={index}
            name={tech.name}
            link={tech.link}
            icon={tech.icon}
            experience={tech.experience}
          />
        );
      })}
    </section>
  );
}

export default Skills;
