import type { ReactNode } from "react";
import type React from "react";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children, ...props }) => {
  return (
    <>
      <header className="flex items-center justify-center fixed top-0 w-full z-[99999]">
        <div
          className="min-h-16 p-5 justify-between items-center w-full max-w-7xl"
          {...props}
        >
          {children}
        </div>
      </header>
      <div className="h-16 w-full pointer-events-none" aria-hidden="true"></div>
    </>
  );
};

export default Header;
