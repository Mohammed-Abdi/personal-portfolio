import "./About.css";
import socials from "../../data/socials.js";
import Link from "../../components/link/Link.jsx";
import { Icon } from "@iconify/react";

function About() {
  return (
    <>
      <section className="about">
        <div className="my about-me">
          <div className="image-wrapper">
            <Icon icon="lets-icons:user" className="icon" />
            <img
              src="image/profile/mohammed-abdi.webp"
              alt="profile picture"
              width={50}
              height={50}
            />
          </div>
          <div className="personal-info-wrapper">
            <span className="name">Mohammed Abdi</span>
            <span className="profession">Frontend Engineer</span>
            <span className="location">
              <Icon icon="weui:location-filled" />
              Dire Dawa, Ethiopia
            </span>
          </div>
          <a className="download-cv" download href="docs">
            Resume <Icon icon="tabler:download" />
          </a>
        </div>
        <div className="my social-links">
          <span className="link-title">Feel free to reach out!</span>
          {socials.map((social, index) => {
            return (
              <Link
                key={index}
                name={social.name}
                icon={social.icon}
                link={social.link}
                username={social.username}
              />
            );
          })}
        </div>
      </section>
      {/* <p className="intro">
        I'm a Frontend Engineer with a passion for crafting beautiful,
        responsive, and high-performance web applications
      </p> */}
    </>
  );
}

export default About;
