import "./Job.css";
import iconMap from "../../data/iconMap";

function Job(props) {
  const Location = iconMap["Location"];
  const Institution = iconMap["Institution"];
  return (
    <div className="job">
      <a
        href={props.link}
        className="wrapper"
        aria-label={`Visit ${props.name} official website`}
      >
        <div className="image-wrapper">
          <Institution className="icon" />
          <img
            src={props.logo}
            alt={`${props.name} logo`}
            loading="lazy"
            width={50}
            height={50}
          />
        </div>
      </a>
      <span className="profession">{props.job}</span>
      <span className="name">{props.name}</span>
      <span className="location">
        <Location />
        {props.location}
      </span>
      <span className="description">{props.description}</span>
      <span className="duration">
        {props.started} - {props.ended}
      </span>
    </div>
  );
}

export default Job;
