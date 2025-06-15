import "./Experience.css";
import experiences from "../../data/experience.js";
import Job from "../../components/job/Job.jsx";

function Experience() {
  return (
    <div className="wrapper hidden">
      <span className="section-title">Experience</span>
      <div className="experiences">
        {experiences.map((exp, index) => {
          return (
            <Job
              key={index}
              job={exp.job}
              name={exp.name}
              location={exp.location}
              description={exp.description}
              started={exp.started}
              ended={exp.ended}
              logo={exp.logo}
              link={exp.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
