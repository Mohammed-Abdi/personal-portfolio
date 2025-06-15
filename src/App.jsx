import { useEffect } from "react";
import About from "./layout/about/About.jsx";
import Education from "./layout/education/Education.jsx";
import Experience from "./layout/Experience/Experience.jsx";
import Footer from "./layout/footer/Footer.jsx";
import Header from "./layout/header/Header.jsx";
import Projects from "./layout/projects/Projects.jsx";
import Skills from "./layout/skills/Skills.jsx";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.01,
      }
    );
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>
      <Footer name="Mohammed Abdi" />
    </>
  );
}

export default App;
