import React from 'react';

const Button = ({text}) => {
  return (
    <div className="max-w-max bg-textSecondary leading-4 tracking-widest font-gotham font-semibold px-4  py-4 text-white">
      {text}
    </div>
  );
};

export default Button;
