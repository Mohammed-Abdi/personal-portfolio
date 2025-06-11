import "./ThemeButton.css";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsLight(true);
      document.body.classList.add("light");
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  return (
    <button onClick={toggleTheme} className="theme-btn">
      {isLight ? (
        <Icon icon="uil:sun" className="icon" />
      ) : (
        <Icon icon="uil:moon" className="icon" />
      )}
    </button>
  );
}

export default ThemeToggle;
