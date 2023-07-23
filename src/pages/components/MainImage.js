import React from "react";

const MainImage = ({imgLink}) => {
  return (
    <div className="h-[100%] w-[100%]  overflow-hidden">
      <img
        src={imgLink}
        alt="Product"
        className="object-cover  object-top w-full h-full"
      />
    </div>
  );
};

export default MainImage;
