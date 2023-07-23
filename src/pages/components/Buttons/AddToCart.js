import React from "react";
import { Link } from "react-router-dom";

// TODO: need to improve this
const AddToCart = ({}) => {
  return (
    <Link to="/cart">
      <div className="py-4 cursor-pointer text-center bg-gray-800">
        AddToCart
      </div>
    </Link>
  );
};

export default AddToCart;
