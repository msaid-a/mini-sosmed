import React, { ReactNode } from "react";
import "./style.css";
import { Text } from "..";
import { useLocation } from "react-router-dom";

interface props {
  children: ReactNode;
}

const Layout: React.FC<props> = (props) => {
  const location = useLocation();

  return (
    <div className="container-custom">
      <>
        <ul className="flex border-2 mb-6">
          <li className="flex-1 mr-2">
            <Text.Link
              className={
                location.pathname === "/" || location.pathname.includes('detail')
                  ? "text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
                  : "text-center block border border-white rounded hover:b  order-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
              }
              to="/"
            >
              User
            </Text.Link>
          </li>
          <li className="flex-1 mr-2">
            <Text.Link
              className={
                location.pathname.includes("post")
                  ? "text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
                  : "text-center block border border-white rounded hover:b  order-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
              }
              to="/post"
            >
              Post
            </Text.Link>
          </li>
          <li className="text-center flex-1">
            <Text.Link
              className={
                location.pathname.includes("album") || location.pathname.includes("photos")
                  ? "text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
                  : "text-center block border border-white rounded hover:b  order-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
              }
              to="/albums"
            >
              Album
            </Text.Link>
          </li>
        </ul>
      </>
      {props.children}
    </div>
  );
};

export default Layout;
