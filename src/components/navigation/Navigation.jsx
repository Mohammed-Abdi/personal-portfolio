import "../navigation/Navigation.css";
import Home from "../navigation/icons/home.svg";
import About from "../navigation/icons/about.svg";
import Work from "../navigation/icons/projects.svg";
import Skills from "../navigation/icons/skills.svg";
import Experience from "../navigation/icons/work.svg";
import Education from "../navigation/icons/education.svg";
import Contact from "../navigation/icons/contact.svg";

function Navigation({ menuOpen }) {
  return (
    <nav>
      <ul className={`nav-menu ${menuOpen ? "show" : ""}`}>
        <li>
          <a href="#">
            <img src={Home} alt="home" />
            Home
          </a>
        </li>
        <li>
          <a href="#about">
            <img src={About} alt="about" />
            About
          </a>
        </li>
        <li>
          <a href="#projects">
            <img src={Work} alt="projects" />
            Work
          </a>
        </li>
        <li>
          <a href="#skills">
            <img src={Skills} alt="skills" />
            Skill
          </a>
        </li>
        <li>
          <a href="#experience">
            <img src={Experience} alt="experience" />
            Experience
          </a>
        </li>

        <li>
          <a href="#contact">
            <img src={Contact} alt="contact" />
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
