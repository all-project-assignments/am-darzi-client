import React from 'react';

const Feature = ({feature: {text, text2, image}}) => {
  return (
    <div className="font-gotham text-textSecondary bg-slate-200  sm:backdrop-blur-[18px] rounded-md sm:rounded-full py-2 overflow-hidden px-4">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="w-20 h-20 rounded-full">
          <img
            className="rounded-full"
            src={require(`../../../images/feature${image}.jpeg`)}
            alt="feature1"
          />
        </div>
        <div className=" pt-2 sm:pl-2 sm:pr-4 text-center sm:text-left">
          <div className="text-sm font-semibold sm:text-[20px] ">{text.toUpperCase()}</div>
          <div className="text-xs sm:text-sm border-2 ">{text2.toUpperCase()}</div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
