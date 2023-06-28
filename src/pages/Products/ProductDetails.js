import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { AiFillStar } from "react-icons/ai";
import {
  CiAirportSign1,
  CiApple,
  CiDeliveryTruck,
  CiHeart,
} from "react-icons/ci";
import Accordion from "../components/Accordin";

// slider modules
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { useLocation, useParams } from "react-router-dom";
// import useProducts from "../hooks/useProducts";

// import { getProductById } from "../controllers/products";
import {getProduct} from '../../services/product'

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [isProductLoading, setIsProductLoading] = useState(true)
  // const { state } = useLocation();
  // const { details, setDetails } = useProducts();
  // const product = state?.product;
  const { id } = useParams();
    const [Active, setActive] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState();

    const accordionData = [
      {
        accordionIcon: <CiDeliveryTruck />,
        title: "Section 1",
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`,
      },
      {
        accordionIcon: <CiAirportSign1 />,
        title: "Section 1",
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`,
      },
      {
        accordionIcon: <CiApple />,
        title: "Section 1",
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`,
      },
    ];

  //   const { title, content } = accordionData;
  //   console.log(Active);

  const getData = async () => {
    setIsProductLoading(true);
    const data =await getProduct(id)
    console.log(data)
    setProduct(data);
    setIsProductLoading(false)
  }
  useEffect(() => {
    getData()
    // if (!product) {
    //   getProductById(id).then((product) => setDetails(product));

    //   //   // MMake Here Apiu Call
    //   console.log("Comming Directly");
    // } else {
    //   console.log("Comming On ProductClick");

      //   const present = productsDetails.find(
      //     (product) => details.id === product.id
      //   );
      //   if (!present) {
      //     setProductsDetails((previousValue) => {
      //       const array = previousValue;
      //       array.push(details);
      //       return array;
      //     });
      //     console.log("Already Present Not");
      //   }
      //   else{
      //       console.log("Already Present Yes");
      //   }
    // }
  }, [id, getData]);

  // if (isProductLoading  && product !== null) {
  //   return (
     
  //   );
  // }
  // console.log(details);
  return <div>
    {isProductLoading ? 
    <div>Loading...</div>
    :
    <div className="buy-now-section">
    <div className="container-fluid">
      <div className="row px-0">
        <div className="col-md-7 product-section px-0">
          <img
            src={!product ? product.mainImage : product.mainImage}
            alt=""
            className="img-fluid"
          />

          <div className="product-detail">
            <div className="container">
              <div className="row p-3 py-4">
                <div className="col-md-6 text ps-5 p-3">
                  <p className="made-from">
                    {!product
                      ? product.fabric.heading
                      : product.fabric.heading}
                  </p>
                  <p className="made-from-des">
                    {!product ? product.fabric.desc : product.fabric.desc}
                  </p>
                </div>
                <div className="col-md-6 img">
                  <img
                    src={
                      !product ? product.fabric.image : product.fabric.image
                    }
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="product-detail">
            <div className="container-fluid">
              <div className="row p-3 py-4">
                <div className="col-md-8 img">
                  <img
                    src={
                      !product
                        ? product.lowerSection.image
                        : product.lowerSection.image
                    }
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-4 text  ps-3 pt-3">
                  <p className="made-from">Made From</p>
                  <p className="made-from-des">
                    {!product
                      ? product.lowerSection.desc
                      : product.lowerSection.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="product-detail-slider">
            <div className="container px-4">
              <div className="row">
                <div className="col-md-9 mx-auto">
                  <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    // navigation={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper product-slidees-own"
                  >
                    {(!product
                      ? [
                          product.mainImage,
                          product.lowerSection.image,
                          product.fabric.image,
                        ]
                      : [
                          product.mainImage,
                          product.lowerSection.image,
                          product.fabric.image,
                        ]
                    ).map((image) => (
                      <SwiperSlide key={image}>
                        <img src={image} alt="" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="handmaade-section py-4 px-2">
            <p className="hand-crafted">HAND_CRAFTED</p>
            <p className="with-love">
              WITH LOVE <CiHeart />
            </p>
            <div className="container">
              <div className="row">
                <div className="col-md-8 mx-auto">
                  {accordionData.map((item, index) => {
                    return (
                      <Accordion
                        title={item.title}
                        accordionIcon={
                          item.accordionIcon ? (
                            item.accordionIcon
                          ) : (
                            <AiFillStar />
                          )
                        }
                        content={item.content}
                        key={index}
                        index={index}
                        isActive={Active === index ? true : false}
                        setActive={setActive}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="some-more-des my-3">
            <div className="container">
              <div className="row">
                <div className="col-md-8 mx-auto image-wrappere">
                  <div className="px-5">
                    <img
                      src={
                        !product
                          ? product.fabric.details.image
                          : product.fabric.details.image
                      }
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="row img-texteee ">
                    <div className="col-md-6">
                      <img
                        src={
                          !product
                            ? product.fabric.image
                            : product.fabric.image
                        }
                        alt=""
                        className="img-fluid negative-image"
                      />
                    </div>
                    <div className="col-md-6">
                      <p className="woven-by">
                        {!product
                          ? product.fabric.details.heading
                          : product.fabric.details.heading}
                      </p>
                      <p className="tracing-its-roots">
                        {!product
                          ? product.fabric.details.desc
                          : product.fabric.details.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-section-product-detail">
            <div className="container">
              <div className="row">
                <div className="col-md-8 mx-auto">
                  {/* {accordionData.map((item, index) => {
                    return (
                      <Accordion
                        title={item.title}
                        accordionIcon={
                          item.accordionIcon ? (
                            item.accordionIcon
                          ) : (
                            <AiFillStar />
                          )
                        }
                        content={item.content}
                        key={index}
                        index={index}
                        isActive={Active === index ? true : false}
                        setActive={setActive}
                      />
                    );
                  })} */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 buy-option ">
          <nav aria-label="breadcrumb">
            {/* <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Library</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <a href="#">Data</a>
              </li>
            </ol> */}
          </nav>
          <div className="px-md-5 product-item-wrapper">
            <div className="buy-option-header">
              <div className="header-right">
                <p className="main-heading">
                  {!product ? product.heading : product.heading}
                </p>
                <p className="product-tagline">
                  Pure Wool - Half-Canvas - Super 120s
                </p>
              </div>
              <button className="price-btn">
                INR {!product ? product.price : product.price}
              </button>
            </div>
            <div className="buy-option-rating">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <p className="rating">(Rated 4.8/5 based on 4 reviews )</p>
            </div>
            <p className="description-about-buy-now">
              {!product ? product.desc : product.desc}
            </p>

            <button className="order-now btn">Customize Now</button>

            <div className="accordion-section px-2">
              {/* {accordionData.map((item, index) => {
                return (
                  <Accordion
                    title={item.title}
                    accordionIcon={
                      item.accordionIcon ? item.accordionIcon : <AiFillStar />
                    }
                    content={item.content}
                    key={index}
                    index={index}
                    isActive={Active === index ? true : false}
                    setActive={setActive}
                  />
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
  }
  </div>;
};

export default ProductDetails;
