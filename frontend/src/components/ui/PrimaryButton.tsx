import type { ReactNode } from "react";
import type React from "react";

interface PrimaryButtonProp extends React.HtmlHTMLAttributes<HTMLElement> {
  label: string;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  style?: React.CSSProperties;
}

const PrimaryButton: React.FC<PrimaryButtonProp> = ({
  label,
  icon,
  type = "button",
  className,
  style,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`flex items-center gap-1 py-2.5 px-5 rounded-full font-medium cursor-pointer outline outline-[var(--color-border)] ${className?.trim()}`}
      style={{
        background:
          "linear-gradient(var(--color-bg-overlay-20), var(--color-bg-overlay-10))",
        ...style,
      }}
      {...props}
    >
      {icon && icon}
      {label}
    </button>
  );
};

export default PrimaryButton;
