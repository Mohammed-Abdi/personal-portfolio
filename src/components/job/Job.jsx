import "./Job.css";
import { Icon } from "@iconify/react";

function Job(props) {
  return (
    <div className="job">
      <div className="wrapper">
        <div className="image-wrapper">
          <Icon icon="mdi:building" className="icon" />
          <img
            src={props.logo}
            alt={props.name}
            loading="lazy"
            width={50}
            height={50}
          />
        </div>
      </div>
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
