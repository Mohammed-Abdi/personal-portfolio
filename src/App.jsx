import About from "./layout/about/About.jsx";
import Education from "./layout/education/Education.jsx";
import Experience from "./layout/Experience/Experience.jsx";
import Footer from "./layout/footer/Footer.jsx";
import Header from "./layout/header/Header.jsx";
import Projects from "./layout/projects/Projects.jsx";
import Skills from "./layout/skills/Skills.jsx";

function App() {
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
