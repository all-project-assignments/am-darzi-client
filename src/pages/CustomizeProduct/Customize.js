import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import MainImage from "../components/MainImage";

import { FaCheck } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";
// HAVE TO UPDATE IT WITH DYNAMIC AND WITH ID
const section_list = [
  "FIT",
  "CANVAS",
  "LAPEL",
  "BUTTONS",
  "POCKETS",
  "VENTS",
  "PANTS",
  "ADDONS",
  "MONOGRAM",
  "SUSTAINABLE",
  "NOTES",
];

const customizations = [
  {
    name: "FIT",
    variants: [
      {
        name: "Modern Slim0",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/fit/modern-slim.jpg",
      },
      {
        name: "Relaxed Tailored1",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/fit/relaxed-tailored.jpg",
      },
      {
        name: "Modern Slim2",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/fit/modern-slim.jpg",
      },
      {
        name: "Relaxed Tailored3",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/fit/relaxed-tailored.jpg",
      },
      {
        name: "Modern Slim4",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/fit/modern-slim.jpg",
      },
    ],
    applied: "0 1 0 1 1",
  },
];

const CustomImageSection = ({ variant }) => {
  const [active, setActive] = useState(0);

  const custom = customizations.find((c) => c.name === variant);
  console.log("custom", custom);
  const dumpApplied = custom.applied.split(" "); //
  console.log("dumpApplied", custom.applied);
  const applicableVariants = custom.variants.filter((v, i) =>
    dumpApplied[i] === "1" ? v : null
  );

  return applicableVariants.map((variant, i) => (
    <div
      onClick={() => setActive((prev) => i)}
      className={` h-[40%] w-[30%] flex flex-col  px-2 py-1 border-2 border-gray-600 rounded-lg hover:bg-[#98c6e8] hover:text-slate-800 ${
        i === active ? "bg-[#98c6e8]" : null
      } `}
    >
      <img
        className="h-[80%] rounded-md "
        src={variant.link}
        alt="Modern Slim"
      />
      <div className="pt-4 flex items-center justify-between gap-4">
        <span className="font-semibold">{variant.name}</span>
        {active === i ? (
          <BiCheckCircle className="bg-[#13f01e] rounded-full text-2xl" />
        ) : null}
      </div>
    </div>
  ));
};
// get the product details from server

const Customize = () => {
  const [visited, setVisited] = useState([]);
  const [active, setActive] = useState(null);

  // capture the incoming product

  const changeSection = (index) => {
    // CHANGE ACTIVE
    setActive((prev) => index);
    // PUSH TO STATE IF NOT PRESENT
    setVisited((prev) => {
      if (prev[index]) {
        return prev;
      } else {
        const updatedVisited = [...prev];
        updatedVisited[index] = true;
        return updatedVisited;
      }
    });
  };

  return (
    <div
      className={` flex flex-col md:flex-row md:min-h-[calc(100vh-5rem)] font-gotham text-white`}
    >
      {/* main image of the product */}
      <section className="md:w-2/6">
        <MainImage
          imgLink={
            "https://cdn.hangrr.com/v7/s3/product/467/burgundy-summer-linen-suit-multi.webp"
          }
        />
      </section>

      <main className="border-2 border-green-800 md:w-4/6">
        {/* small img of product as a header */}
        <div className="bg-[#2d2e32] text-white flex justify-between ">
          <div className="flex items-center">
            <img
              className="h-16"
              src="https://cdn.hangrr.com/v7/s3/product/467/burgundy-summer-linen-suit-multi.webp"
              alt="Product"
            />
            <p className="text-xl">Product Name</p>
          </div>
          <div className="text-xl bg-slate-100 text-gray-950 text-center px-2 my-2 rounded-sm">
            INR <br />
            18875
          </div>
        </div>

        {/* Customization Section */}
        <div className="h-[calc(100vh-6rem)] flex bg-[#dfe6ee] ">
          {/* image section */}
          <div className=" flex flex-wrap gap-4 px-2 py-2 text-[#0f1422]">
            <CustomImageSection variant={"FIT"} />
          </div>
          {/* section List */}
          <div className="w-2/6 h-full bg-[#2e3345]">
            {section_list.map((section, index) => {
              return (
                <div
                  onClick={() => changeSection(index)}
                  key={index}
                  className={`  font-normal `}
                >
                  <div
                    className={`flex justify-between py-1 px-1 cursor-pointer hover:bg-[#1f4ac9] ${
                      active === index ? "bg-[#16088d]" : ""
                    }`}
                  >
                    <p>{section}</p>
                    {visited[index] ? <FaCheck /> : null}
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Customize;
