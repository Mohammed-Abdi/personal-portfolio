import "./About.css";
import socials from "../../data/socials.js";
import Link from "../../components/link/Link.jsx";
import iconMap from "../../data/iconMap.js";

function About() {
  const Verified = iconMap["Verified"];
  const User = iconMap["User"];
  return (
    <>
      <section className="about">
        <div className="my about-me hidden">
          <div className="image-wrapper">
            <User className="icon" />
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
          <Verified className="legit" />
        </div>
        <div className="my social-links hidden">
          <span className="link-title">Feel free to reach out!</span>
          {socials.map((social, index) => {
            return <Link key={index} name={social.name} link={social.link} />;
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
