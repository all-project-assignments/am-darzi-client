import React, { useEffect, useState } from "react";
import { GrAdd } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./cart.css";
import useProducts from "../hooks/useProducts";
import CartItem from "../components/CartItem";
import { getAllCartProducts } from "../controllers/products";
const Cart = () => {
  const { cartProducts, setCartProducts, total, setTotal } = useProducts();
  useEffect(() => {
    getAllCartProducts().then(async (products) => {
      setCartProducts(products);
      const totalAmount = cartProducts
        .map((products) => products.price)
        .reduce((a, b) => a + b, 0);
        console.log(totalAmount);
      setTotal(5000);
      console.log(total);
    });
  }, []);

  const [showData, setShowData] = useState(false);
  const [showData2, setShowData2] = useState(false);
  // const handleClicked= () => {
  //     setShowData(!showData);
  //   };
  return (
    <>
      <div className="main-cart py-5 ">
        <div className="head-cart ">
          <p className="para1">CUSTOM-MADE-CART</p>
          <p className="para2">Your Are Building Sustainable</p>
        </div>
        <div className="new-div my-5 container">
          <div className="row">
            <div className="col-md-0"></div>
            <div className="col-md-7 px-5">
              {cartProducts.map((product) => (
                <CartItem
                  item={{
                    title: product.heading,
                    description: "Fabric Swatch Only",
                    image: product.images[0],
                  }}
                />
              ))}

              <div className="row mt-5 cart-to">
                <div className="col-md-12 col-xs-12 cart-detail">
                  <p>
                    Items ({cartProducts.length}) <span>INR {total}</span>
                  </p>
                  <hr />
                  <p>
                    Shipping <span>Free</span>
                  </p>
                  <hr />
                  <p>
                    Tottal Amount <span>{total}</span>
                  </p>
                </div>
              </div>
              <div className="row mt-5 cart-to">
                <div className="col-md-12 col-xs-12 cart-detail">
                  <p>YOU HAVE ADDED A FABRIC SWATCH</p>
                  <p>
                    The shipping charges are fully redeemable against your first
                    order over $300. *A maximum of 6 fabric swatches can be
                    added.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 info-data px-5">
              <div className="main">
                <div className="next">
                  <button>Next Step</button>
                </div>
                <div className="mt-3 checkout">
                  <button>
                    Process Check Out <AiOutlineArrowRight />{" "}
                  </button>
                </div>
                <p className="mt-4">Order your samples now!</p>
              </div>

              <div className="support mt-5">
                <p>
                  <button onClick={() => setShowData(!showData)}>
                    <GrAdd />{" "}
                  </button>{" "}
                  Get Styled Support{" "}
                </p>
                {showData && (
                  <p className="about">
                    Building a custom product is a personal experience and we
                    understand that you may require expert support sometimes.
                    Hence, we assign a real stylist for your every order. They
                    review your customizations along with your measurement
                    profile and work with you to ensure perfection. It's fun,
                    it's accurate & it's hassle-free!
                  </p>
                )}

                <p>
                  {" "}
                  <button onClick={() => setShowData2(!showData2)}>
                    <GrAdd />{" "}
                  </button>{" "}
                  Get Styled Support{" "}
                </p>
                {showData2 && (
                  <p className="about">
                    We are proud to be building a sustainable future of fashion
                    - the opposite of fast-fashion. To help your clothes last
                    even-longer we designed beautiful garment-shields, that are
                    made from recycled Pet bottles! Our garment-shield bags ship
                    free with every order. Enjoy clothes that last - luxury need
                    not be expensive nor should it be harmful to the
                    environment!
                  </p>
                )}
              </div>
            </div>

            <div className="col-md-0"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
