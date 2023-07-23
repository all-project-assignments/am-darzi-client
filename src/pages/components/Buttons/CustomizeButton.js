import React from "react";
import { Link } from "react-router-dom";

// TODO: add transitions to it correctly
const CustomizeButton = ({path, text}) => {
  return (
    <Link to={`${path}/customize`}>
      <button className="bg-blue-600 font-bold text-white text-2xl px-6 py-2 text-center rounded-md w-full transition-all ease-in-out duration-150 delay-0 hover:bg-green-500 hover:-translate-x-4">
        {text}
      </button>
    </Link>
  );
};

export default CustomizeButton;
