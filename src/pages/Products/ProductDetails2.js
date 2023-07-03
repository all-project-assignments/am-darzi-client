import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {getProduct} from '../../services/product';

const ProductDetails2 = () => {
  const [product, setProduct] = useState(null);
  const [isProductLoading, setIsProductLoading] = useState(true);
  const {id} = useParams();

  const getData = async () => {
    setIsProductLoading(true);
    const data = await getProduct(id);
    console.log(data);
    setProduct(data);
    setIsProductLoading(false);
  };

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div>
      {isProductLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex font-gotham">
          <div className="md:w-4/6">
            {/* main image */}
            <div className="md:w-full h-screen">
              <img
                src={product ? product.mainImage : product.fabric.image}
                alt=""
                className="object-cover object-top max-h-full w-full"
              />
            </div>
            {/* left right aligned  */}
            <div className="flex flex-col gap-4 bg-gray-300 mb-48">
              {/* section */}
              <div className="flex justify-center box-border gap-4  p-8 w-full">
                {/* content */}
                <div className="">
                  <h4>Made from:</h4>
                  {/* <br /> */}
                  <p className="max-w-xs">
                    Blgia Linen with Super 1205 Meino Wool Matt sheen & luxurios
                    soft feel
                  </p>
                </div>
                {/* section image */}
                <div className="h-96">
                  <img
                    src={!product ? product.fabric.image : product.fabric.image}
                    alt=""
                    className="h-full"
                  />
                </div>
              </div>
              <div className="flex flex-row-reverse justify-center gap-4 box-border p-8 w-full">
                {/* content */}
                <div className="">
                  <h4>Made from:</h4>
                  {/* <br /> */}
                  <p className="max-w-xs">
                    Blgia Linen with Super 1205 Meino Wool Matt sheen & luxurios
                    soft feel
                  </p>
                </div>
                {/* section image */}
                <div className="h-96">
                  <img
                    src={!product ? product.fabric.image : product.fabric.image}
                    alt=""
                    className="h-full"
                  />
                </div>
              </div>
              <div className="flex justify-center box-border  gap-4  p-8 w-full">
                {/* content */}
                <div className="">
                  <h4>Made from:</h4>
                  {/* <br /> */}
                  <p className="max-w-xs">
                    Blgia Linen with Super 1205 Meino Wool Matt sheen & luxurios
                    soft feel
                  </p>
                </div>
                {/* section image */}
                <div className="h-96">
                  <img
                    src={!product ? product.fabric.image : product.fabric.image}
                    alt=""
                    className="h-full"
                  />
                </div>
              </div>
            </div>

            {/* bottom content */}
            <div>Hello</div>
          </div>

          <div className="flex flex-col box-border pt-40 px-8 w-2/6">
            <div>Home / Suits / Offbeat</div>
            <div className="pl-3 flex flex-col gap-4">
              <div className="flex">
                <div>
                  <h2 className="text-2xl font-bold">
                    Soho Blue Linen Wool Suit
                  </h2>
                  <p className="font-thin text-gray-400">
                    Linen-Half-Canvas - Linen Wool
                  </p>
                </div>
                <div className="ml-2 p-2 rounded-sm font-semibold text-xl bg-gray-400">
                  <p>INR</p>
                  <p>18785</p>
                </div>
              </div>
              <div className="mt-4 text-gray-400">
                <p>
                  This Soho Linen Blue Suit is a versatile staple bringing the
                  best of wool & linen. The subtle texture, combined with a
                  modern blue hue makes this one of our best sellers.
                </p>
              </div>
              <button className="bg-blue-600 font-bold text-white text-2xl px-6 py-2 rounded-md">
                CUSTOMIZE NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails2;
