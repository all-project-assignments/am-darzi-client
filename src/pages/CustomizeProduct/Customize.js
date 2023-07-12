import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import MainImage from "../components/MainImage";

// get the product details from server

const Customize = () => {
  // capture the incoming product

  return (
    <div className={` flex flex-col md:flex-row`}>
      {/* main image of the product */}
      <section className="md:w-2/6">
        <MainImage imgLink={'https://cdn.hangrr.com/v7/s3/product/467/burgundy-summer-linen-suit-multi.webp'} />
      </section>
      <main className="border-2 border-green-800 md:w-4/6">
        {/* small img of product */}
        <div>
          <p>You are designing</p>
          <p>{"Product name from url"}</p>
        </div>
        <div>INR 18775</div>
        <center>
          {/* img redering section */}
          <section></section>
          {/* list sections */}
        </center>
        <footer>Add to cart</footer>
      </main>
    </div>
  );
};

export default Customize;
