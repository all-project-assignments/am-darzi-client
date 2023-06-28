import React from "react";
import { TiDelete } from "react-icons/ti";

function CartItem({ item }) {
  const { image, title, description } = item;
  return (
    <div className="row cart-to mt-4">
      <div className="col-md-3 col-xs-12 cart-img">
        <img src={image} alt="" />
      </div>
      <div className="col-md-9 col-xs-12 cart-detail">
        <p>
          {title} 0 <br /> (Fabric Swatch)
        </p>
        <hr />
        <p>Quantity : {50}</p>
        <hr />
        <p>{description}</p>
        <div className="cross">
          <TiDelete />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
