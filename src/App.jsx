import About from "./layout/about/About.jsx";
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
      </main>
    </>
  );
}

export default App;
