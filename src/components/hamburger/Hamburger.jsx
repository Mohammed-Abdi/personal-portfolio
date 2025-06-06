import "../hamburger/Hamburger.css";

function Hamburger({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`hamburger ${menuOpen ? "active" : ""}`}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}

export default Hamburger;
