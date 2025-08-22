import type React from "react";
import Header from "../../components/layouts/Header";
import NavBar from "../../components/layouts/NavBar";
import Hero from "./sections/Hero";

const Home: React.FC = () => {
  return (
    <main>
      <Header>
        <NavBar />
      </Header>
      <Hero />
    </main>
  );
};

export default Home;
