import { ReactNode } from "react";

type Props = {
  type?: "button" | "submit";
  buttonClass: string;
  onClick?: () => void;
  children: ReactNode;
};

const Button = ({ type = "button", buttonClass, onClick, children }: Props) => {
  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
