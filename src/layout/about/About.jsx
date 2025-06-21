import "./About.css";
import socials from "../../data/socials.js";
import Link from "../../components/link/Link.jsx";
import { Suspense, lazy } from "react";

const Verified = lazy(() => import("../../assets/icons/symbols/Verified.jsx"));
const User = lazy(() => import("../../assets/icons/symbols/User.jsx"));

function About() {
  return (
    <>
      <section className="about">
        <div className="my about-me hidden">
          <div className="image-wrapper">
            <Suspense fallback={<span>Loading icon...</span>}>
              <User className="icon" />
            </Suspense>
            <img
              src="/image/profile/mohammed-abdi.webp"
              alt="Mohammed Abdi's profile picture"
              width={50}
              height={50}
              decoding="async"
              loading="eager" // Profile image likely above-the-fold
              style={{ aspectRatio: "1/1" }} // maintain aspect ratio to avoid layout shifts
            />
          </div>
          <div className="personal-info-wrapper">
            <span className="name">Mohammed Abdi</span>
            <span className="profession">Frontend Engineer</span>
            <span className="location">Based in Dire Dawa, Ethiopia</span>
          </div>
          <Suspense fallback={<span>Loading icon...</span>}>
            <Verified className="legit" />
          </Suspense>
        </div>
        <div className="my social-links hidden">
          <span className="link-title">Feel free to reach out!</span>
          {socials.map((social, index) => (
            <Link key={index} name={social.name} link={social.link} />
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
