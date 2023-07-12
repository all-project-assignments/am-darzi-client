import React from "react";
import { Link } from "react-router-dom";


const CustomizeButton = ({path}) => {
  return (
    <Link to={`${path}/customize`}>
      <button className="bg-blue-600 font-bold text-white text-2xl px-6 py-2 text-center rounded-md w-full">
        CUSTOMIZE NOW
      </button>
    </Link>
  );
};

export default CustomizeButton;
