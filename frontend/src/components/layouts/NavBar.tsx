import type React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { setActive } from "../../features/settings/settingsSlice";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const navLinks = useSelector((state: RootState) => state.settings.navLinks);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <nav
      className="flex fixed top-5 left-1/2 -translate-x-1/2 rounded-full items-center gap-1.5 p-2 outline outline-[var(--color-border)] text-sm"
      style={{
        background:
          "linear-gradient(var(--color-bg-overlay-20), var(--color-bg-overlay-10))",
      }}
    >
      {navLinks.map((navLink) => (
        <Link
          key={navLink.link}
          to={navLink.link}
          rel="noreferrer noopener"
          onClick={() => dispatch(setActive(navLink.link))}
          className={`relative flex items-center justify-center w-16 py-1.5 rounded-full transition-all duration-300
        ${
          navLink.isActive
            ? "bg-[linear-gradient(var(--color-bg-overlay-20),var(--color-bg-overlay-10))]"
            : ""
        }`}
        >
          {navLink.label}

          {navLink.isActive && (
            <>
              <div className="absolute -top-2.5 w-4 h-0.5 bg-amber-50 rounded-full"></div>
              <div
                className="absolute -top-2.5 w-6 h-2 opacity-50"
                style={{
                  background: "var(--color-text-primary)",
                  filter: "blur(8px)",
                }}
              ></div>
            </>
          )}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
