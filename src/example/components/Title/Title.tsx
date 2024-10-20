import classNames from "classnames";

import { Props } from "./types";

import "./Title.css";

const Title = ({ children, isGreen }: Props) => {
  return (
    <h1 className={classNames("title", { "title--color_green": isGreen })}>
      {children}
    </h1>
  );
};

export { Title };
