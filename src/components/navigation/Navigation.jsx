import "../navigation/Navigation.css";
import Home from "../navigation/icons/home.svg";
import About from "../navigation/icons/about.svg";
import Work from "../navigation/icons/projects.svg";
import Skills from "../navigation/icons/skills.svg";
import Experience from "../navigation/icons/work.svg";
import Education from "../navigation/icons/education.svg";

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
            <img src={About} alt="home" />
            About
          </a>
        </li>
        <li>
          <a href="#projects">
            <img src={Work} alt="home" />
            Work
          </a>
        </li>
        <li>
          <a href="#skills">
            <img src={Skills} alt="home" />
            Skill
          </a>
        </li>
        <li>
          <a href="#experience">
            <img src={Experience} alt="home" />
            Experience
          </a>
        </li>
        <li>
          <a href="#education">
            <img src={Education} alt="home" />
            Education
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
