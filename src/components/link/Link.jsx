import "./Link.css";

function Link(props) {
  <a href={props} className="social-link">
    <Icon icon={props.icon} className="social-link-icon" />
    <div className="social-link-detail-wrapper">
      <span className="social-media-name">{props.name}</span>
      <span className="username">{props.username}</span>
    </div>
  </a>;
}

export default Link;
