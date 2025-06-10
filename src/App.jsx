import About from "./layout/about/About.jsx";
import Header from "./layout/header/Header.jsx";
import Skills from "./layout/skills/Skills.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
