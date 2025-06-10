import "./About.css";
import socials from "../../data/socials.js";
import Link from "../../components/link/Link.jsx";

function About() {
  return (
    <section className="about">
      <div className="social-links">
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
  );
}

export default About;
