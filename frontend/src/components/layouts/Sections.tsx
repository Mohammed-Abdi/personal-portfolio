import type { ReactNode } from "react";
import type React from "react";

interface SectionsProp extends React.HtmlHTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Sections: React.FC<SectionsProp> = ({ children, ...props }) => {
  return (
    <section className="flex flex-col gap-5 py-5" {...props}>
      {children}
    </section>
  );
};

export default Sections;
