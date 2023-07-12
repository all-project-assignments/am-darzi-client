import React from "react";

const MainImage = ({imgLink}) => {
  return (
    <div className="w-full max-h-screen border-2 border-green-700 overflow-hidden">
      <img
        src={imgLink}
        alt="Product"
        className="object-cover object-top max-h-full w-full"
      />
    </div>
  );
};

export default MainImage;
