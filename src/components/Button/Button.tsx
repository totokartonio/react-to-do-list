import { ReactNode } from "react";
import "./Button.css";

type Props = {
  type?: "button" | "submit";
  variant: "primary" | "secondary" | "negative";
  size: "small" | "medium" | "large";
  onClick?: () => void;
  icon?: ReactNode;
  children: ReactNode;
};

const Button = ({
  type = "button",
  variant = "primary",
  size = "medium",
  onClick,
  children,
}: Props) => {
  return (
    <button type={type} className={`${variant} ${size}`} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
