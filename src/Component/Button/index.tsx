import React, { CSSProperties } from "react";
import classNames from "classnames";
interface props {
  children?: any;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

const Button: React.FC<props> = (props) => {
  const buttonClassName = classNames(
    props.className,
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    props.onClick ? "cursor-pointer" : ""
  );
  return (
    <button
      className={buttonClassName}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;