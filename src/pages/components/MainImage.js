import React from "react";

const MainImage = ({imgLink}) => {
  return (
    <div className="  border-2 border-green-700 overflow-hidden">
      <img
        src={imgLink}
        alt="Product"
        className="object-none object-top sm:min-h-screen"
      />
    </div>
  );
};

export default MainImage;
