import { useState } from "react";
import Hamburger from "../hamburger/Hamburger.jsx";
import Navigation from "../navigation/Navigation.jsx";
import "../header/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Navigation menuOpen={menuOpen} />
    </header>
  );
}

export default Header;
