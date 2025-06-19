import "./Education.css";
import education from "../../data/education.js";
import Job from "../../components/job/Job.jsx";

function Education() {
  return (
    <div className="wrapper hidden">
      <span className="section-title">EDUCATION</span>
      <div className="education">
        {education.map((exp, index) => {
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

export default Education;
