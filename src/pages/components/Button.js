import React from 'react';
import {Link} from 'react-router-dom';
const Button = ({text}) => {
  return (
    <Link to="/products">
      <div className="max-w-max bg-textSecondary leading-4 tracking-widest font-gotham font-semibold px-4  py-4 text-white">
        {text}
      </div>
    </Link>
  );
};

export default Button;
