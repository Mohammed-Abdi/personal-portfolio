import "./Job.css";
import { Suspense, lazy } from "react";

const Location = lazy(() => import("../../assets/icons/symbols/Location.jsx"));
const Institution = lazy(() =>
  import("../../assets/icons/symbols/Institution.jsx")
);

function Job({ link, name, logo, job, description, location, started, ended }) {
  return (
    <div className="job">
      <a
        href={link}
        className="wrapper"
        aria-label={`Visit ${name} official website`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="image-wrapper">
          <Suspense fallback={<span className="icon-placeholder" />}>
            <Institution className="icon" />
          </Suspense>
          <img
            src={logo}
            alt={`${name} logo`}
            loading="lazy"
            decoding="async"
            width={50}
            height={50}
          />
        </div>
      </a>
      <span className="profession">{job}</span>
      <span className="name">{name}</span>
      <span className="location">
        <Suspense fallback={<span className="icon-placeholder" />}>
          <Location />
        </Suspense>
        {location}
      </span>
      <span className="description">{description}</span>
      <span className="duration">
        {started} - {ended}
      </span>
    </div>
  );
}

export default Job;
