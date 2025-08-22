import type React from "react";
import Header from "../components/layouts/Header";
import NavBar from "../components/layouts/NavBar";

const Home: React.FC = () => {
  return (
    <main>
      <Header>
        <NavBar />
      </Header>
    </main>
  );
};

export default Home;
