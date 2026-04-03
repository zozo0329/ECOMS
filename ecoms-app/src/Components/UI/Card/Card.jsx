import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {children}
    </div>
  );
};

export default Card;
