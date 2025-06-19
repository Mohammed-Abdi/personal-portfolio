import "./About.css";
import socials from "../../data/socials.js";
import Link from "../../components/link/Link.jsx";
import { Icon } from "@iconify/react";

function About() {
  return (
    <>
      <section className="about">
        <div className="my about-me hidden">
          <div className="image-wrapper">
            <Icon icon="lets-icons:user" className="icon" />
            <img
              src="image/profile/mohammed-abdi.webp"
              alt="mohammed abdi's profile picture"
              width={50}
              height={50}
            />
          </div>
          <div className="personal-info-wrapper">
            <span className="name">Mohammed Abdi</span>
            <span className="profession">Frontend Engineer</span>
            <span className="location">Based in Dire Dawa, Ethiopia</span>
          </div>
          <Icon icon="material-symbols:verified-outline" className="legit" />
        </div>
        <div className="my social-links hidden">
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
