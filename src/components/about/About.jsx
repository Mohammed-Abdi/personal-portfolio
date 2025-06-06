import "../about/About.css";
import Mohammed from "/src/assets/images/mohammed.webp";

function About() {
  return (
    <section className="about" id="about">
      <div className="profile-image">
        <div className="image-wrapper">
          <img className="profile-picture" src={Mohammed} alt="mohammed abdi" />
        </div>
        <span className="location">
          <i class="bx bxs-map"></i>
          Dire Dawa, 3000 Ethiopia
        </span>
      </div>
      <div className="about-me">
        <span className="about-title">A bit about myself</span>
        <div className="about-description">
          Hi, I’m Mohammed Abdi a passionate front-end engineer who loves
          building smooth, interactive web experiences. Whether it’s clean UIs
          with React.js, elegant Vanilla JavaScript, or diving into C++ logic, I
          enjoy solving tough problems with simple, efficient code. From
          frontend magic to backend logic, I thrive on learning, improving, and
          turning ideas into reality.
        </div>
      </div>
    </section>
  );
}

export default About;
