import "../header/Header.css";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Work</a>
        </li>
        <li>
          <a href="#skills">Skill</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
