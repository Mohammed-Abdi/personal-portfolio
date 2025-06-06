import "../hero/Hero.css";
import Button from "../button/Button.jsx";

function Hero() {
  return (
    <section className="hero">
      <div className="badge">
        <span className="light"></span>
        <span className="availability">Available for work</span>
      </div>
      <div className="intro">
        <span className="bg-text">Turning Ideas Into Reality</span>
        <p className="sm-text">
          Hey there, I'm Mohammed —
          <span className="colored">A Front-End Engineer</span>
        </p>
      </div>
      <Button />
    </section>
  );
}

export default Hero;
