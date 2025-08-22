import type React from "react";
import Header from "../../components/layouts/Header";
import NavBar from "../../components/layouts/NavBar";
import Hero from "./sections/Hero";
import Sections from "../../components/layouts/Sections";
import Projects from "./sections/Projects";

const Home: React.FC = () => {
  return (
    <main>
      <Header>
        <NavBar />
      </Header>
      <Sections>
        <Hero />
        <Projects />
      </Sections>
    </main>
  );
};

export default Home;
