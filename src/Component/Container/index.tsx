import React, { CSSProperties, ReactNode } from "react";
import { Loading } from "../index";
import "./style.css";

interface props {
  loading?: Boolean;
  style?: CSSProperties;
  className?: string;
}

const Container: React.FC<props> = (props) => {
  return (
    <div style={props.style} className={props.className}>
      {props.loading ? <Loading /> : props.children}
    </div>
  );
};

export default Container;
