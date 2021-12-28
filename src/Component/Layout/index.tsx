import React, { ReactNode } from "react";
import "./style.css";
import Logo from "../../static/images/logo.png";
interface props {
  children: ReactNode;
}

const Layout: React.FC<props> = (props) => {
  return (
    <div className="container-custom pt-4">
      {props.children}
    </div>
  );
};

export default Layout;