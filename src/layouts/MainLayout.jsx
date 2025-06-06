import "../layouts/MainLayout.css";
import Header from "../components/header/Header.jsx";
import Hero from "../components/hero/Hero.jsx";
import About from "../components/about/About.jsx";

function MainLayout() {
  return (
    <>
      <Header />
      <Hero />
      <About />
    </>
  );
}

export default MainLayout;
