import "./Job.css";
import { Icon } from "@iconify/react";

function Job(props) {
  return (
    <div className="job">
      <a href={props.link} className="wrapper">
        <div className="image-wrapper">
          <Icon icon="mdi:building" className="icon" />
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
        <Icon icon="weui:location-filled" />
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
