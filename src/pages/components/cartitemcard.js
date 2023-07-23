import React from "react";
import MainImage from "./MainImage";


// TODO: will get the card details from props
const CartItemCard = () => {
  return (
    <div className="flex flex-col  border rounded-md border-gray-800 max-w-max px-4 py-2 my-2">
      <div className="flex gap-2 h-64">
        <MainImage
          imgLink={
            "https://cdn.hangrr.com/v7/s3/product/467/burgundy-summer-linen-suit-multi.webp"
          }
        />
        <div>
          <div className="flex justify-between py-2">
            {/* Product Name */}
            <p>Olive Cotton Green Suit</p>
            <span>
              <b>INR 18775</b>
            </span>
          </div>
          <hr />
          <div className="flex justify-between py-2">
            <div>
              Canvas: <span className="font-semibold">Classic</span>
              <span className="text-xs">(+INR 0)</span>
            </div>
            <div className="flex flex-col">
              <p>Customizations</p>
              <div className="flex gap-2">
                {/* // TODO: send back to customization page with already selected data */}
                {/* FIXME: can also use some context to get the data there */}
                <button className="border border-slate-800 rounded-sm px-2">
                  Edit
                </button>
                <button className="border border-slate-800 rounded-sm px-2">
                  View
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            {/* // TODO: add api call to calculate dates */}
            <p>Ship By: Calculated Dates</p>
            <p>
              🔥 FAST SHIP: Calculated Date of Fast Ship{" "}
              <button className="border border-blue-800 rounded-sm px-2">
                {" "}
                {/* //TODO: price increase in redux store and add fastshipping tag to the product */}
                + Add Fast
              </button>
            </p>
            <p>
              🚀 ROCKET SHIP: Calculated Date of Rocket Ship{" "}
              <button className="border border-blue-800 rounded-sm px-2">
                {" "}
                {/*// TODO: price increase in redux store and add rocketshipping tag to the product */}
                + Add Rocket
              </button>
            </p>
          </div>
        </div>
      </div>
      {/* // TODO: this button will dispatch an action to remove the following item from redux store  */}
      <button className="place-self-end rounded-2xl bg-slate-800 text-white h-4 w-4 leading-3 pb-1 ">
        x
      </button>
    </div>
  );
};

export default CartItemCard;
