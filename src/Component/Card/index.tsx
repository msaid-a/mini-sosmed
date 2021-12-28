import React from "react";

interface props {
  children: React.ReactNode;
  title: string;
  className?: string;
}

const Card: React.FC<props> = (props) => {
  return (
    <div className={props.className}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="/mountain.jpg" alt="Mountain" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
