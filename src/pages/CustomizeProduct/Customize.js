import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import MainImage from "../components/MainImage";
import AddToCart from "../components/Buttons/AddToCart";
import { FaCheck } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";
// HAVE TO UPDATE IT WITH DYNAMIC AND WITH ID
const section_list = [
  "FIT",
  "LAPEL",
  "BUTTONS",
  "POCKETS",
  "VENTS",
  "PANTS",
  // "ADDONS",
  // "MONOGRAM",
  // "SUSTAINABLE",
  // "NOTES",
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
    applied: "1 1 1 1 1",
  },
  {
    name: "LAPEL",
    variants: [
      {
        name: "Peak Lapel",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/lapel/peak-lapel.jpg",
      },
      {
        name: "Notch Lapel",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/lapel/notch-lapel.jpg",
      },
      {
        name: "Shawl Lapel",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/lapel/shawl-lapel.jpg",
      },
    ],
    applied: "1 1 1",
  },
  {
    name: "BUTTONS",
    variants: [
      {
        name: "One Button",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/buttons/one-button.jpg",
      },
      {
        name: "Two Button",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/buttons/three-buttons.jpg",
      },
      {
        name: "Three Button",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/buttons/three-buttons.jpg",
      },
      {
        name: "Four Buttons 1 Fasten",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/buttons/4-buttons-1-fasten.jpg",
      },
      {
        name: "Four Buttons 2 Fasten",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/buttons/4-buttons-2-fasten.jpg",
      },
      {
        name: "Six Buttons 2 Fasten",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/buttons/6-buttons-2-fasten.jpg",
      },
    ],
    applied: "1 1 1 1 1 1",
  },
  {
    name: "POCKETS",
    variants: [
      {
        name: "Straight Flap",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/pocket/straight-flap.jpg",
      },
      {
        name: "Straight Flap",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/pocket/straight-no-flap.jpg",
      },
      {
        name: "Slant Flap",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/pocket/slant-flap.jpg",
      },
      {
        name: "Slant No Flap",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/pocket/slant-no-flap.jpg",
      },
      {
        name: "Patch",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/pocket/patch.jpg",
      },
      {
        name: "Patch With Flap",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/pocket/patch-with-flap.jpg",
      },
    ],
    applied: "1 1 1 1 1 1",
  },
  {
    name: "VENTS",
    variants: [
      {
        name: "Single Back Cut",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/pocket/patch-with-flap.jpg",
      },
      {
        name: "Double Back Cut",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/vents/double-back-cut.jpg",
      },
      {
        name: "No Back Cut",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/vents/no-back-cut.jpg",
      },
    ],
    applied: "1 1 1",
  },
  {
    name: "PANTS",
    variants: [
      {
        name: "Cross Pockets",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/pant-pocket/cross-pockets.jpg",
      },
      {
        name: "Straight Pockets",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/pant-pocket/straight-pockets.jpg",
      },
      {
        name: "Round Pockets",
        link: "https://hangrr.com/v7/s3/img18/customize/suits/pant-pocket/round-pockets.jpg",
      },
    ],
    applied: "1 1 1",
  },
];
// TODO: refactor it to multiple components
// now it takes variant name => it will take variant index or (id)
const CustomImageSection = ({ index, data, setData }) => {
  const [active, setActive] = useState(0);

  // add default section data to the parent's data on first come
  useEffect(() => {
    // check if data already have some value on this index if yes then don't change
    const key = customizations[index].name;
    const value = customizations[index].variants[active];
    if (data.hasOwnProperty(key)) {
      return;
    }
    setData((prev) => {
      const prevData = { ...prev };
      prevData[key] = value;
      return { ...prevData };
    });
  }, [index]);

  // change data when user is changing their choice
  useEffect(() => {
    const key = customizations[index].name;
    const value = customizations[index].variants[active];
    setData((prev) => {
      const prevData = { ...prev };
      prevData[key] = value;
      return { ...prevData };
    });
  }, [active]);

  // const custom = customizations.find((c) => c.name === variant);
  const custom = customizations[index];
  console.log("custommms", custom);
  console.log("custom", custom);
  const dumpApplied = custom.applied.split(" "); //
  console.log("dumpApplied", custom.applied);
  const applicableVariants = custom.variants.filter((v, i) =>
    dumpApplied[i] === "1" ? v : null
  );

  // handle which image is active right now
  const handleChange = (i) => {
    setActive((prev) => i);
  };

  return applicableVariants.map((variant, i) => (
    <div
      key={i}
      onClick={() => handleChange(i)}
      className={` max-h-[50%] w-[30%] flex flex-col px-2 py-1 border-2 border-gray-600 rounded-lg hover:bg-[#98c6e8] hover:text-slate-800 ${
        i === active ? "bg-[#98c6e8]" : null
      } `}
    >
      <img
        className="h-[80%] rounded-md "
        src={variant.link}
        alt="Modern Slim"
      />
      <div className="pt-4  flex items-center justify-between w-full sm:gap-4 h-[40%] overflow-hidden box-border">
        <span className="sm:font-semibold text-sm tracking-tight leading-none max-w-[70%]">{variant.name}</span>
        {(
          <BiCheckCircle className={`bg-[#13f01e] p-0 m-0  rounded-full h-[50%] ${active === i ? 'block' : 'hidden'}`} />
        )}
      </div>
    </div>
  ));
};

// get the product details from server

const Customize = () => {
  // keeping track of which custom section have been visited
  const [visited, setVisited] = useState([true]);
  // keeiping track of which section is active (will also be used to show corresponding custom variants)
  const [active, setActive] = useState(0);

  // capture the incoming product

  // will use id instead of index
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

  // collecting data to proceed further
  const [data, setData] = useState({});

  useEffect(() => {
    console.info("data is changing", data);
  }, [data]);

  return (
    <div
      className={` flex flex-col md:flex-row md:min-h-[calc(100vh-5rem)] font-gotham text-white`}
    >
      {/* main image of the product */}
      <section className="md:w-2/6 sm:min-h-[calc(100vh-5rem)] max-h-[calc(100vh-10rem)] overflow-hidden ">
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
        <div className="sm:h-[calc(100vh-10rem)] flex flex-col">
          <div className=" h-full flex flex-col sm:flex-row bg-[#dfe6ee]">
            {/* image section */}
            <div className=" flex flex-wrap gap-4 px-2 py-2 text-[#0f1422] sm:w-4/6">
              {/* <CustomImageSection variant={"FIT"} /> */}
              <CustomImageSection
                index={active}
                data={data}
                setData={setData}
              />
            </div>
            {/* section List */}
            <div className="sm:w-2/6 sm:h-full bg-[#2e3345]">
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
                      {visited[index] ? <FaCheck className={'min-w-2'} /> : null}
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
          <AddToCart className="sm:h-[5rem]"  />
        </div>
      </main>
    </div>
  );
};

export default Customize;
