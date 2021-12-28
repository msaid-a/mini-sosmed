import classNames from "classnames";
import React from "react";

interface props {
  children: React.ReactNode;
  title: string;
  className?: string;
  width?: number | string
}

const Card: React.FC<props> = (props) => {
  const cardClassName = classNames(props.className, "rounded overflow-hidden shadow-lg border-2")
  return (
    <div>
      <div className={cardClassName}>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
