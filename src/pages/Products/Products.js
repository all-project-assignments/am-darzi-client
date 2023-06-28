import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "./products.css";
// import useProducts from "../hooks/useProducts";
// import Filters from "../components/Filters/Filters";
// import { getAllFilters } from "../controllers/filtersController";
// import useFilters from "../hooks/useFilters";
import {AllProducts} from '../../data/demoData'
import { Link } from "react-router-dom";
const Products = () => {
  // const { products, setProducts } = useProducts();
  // const { filters, setFilters } = useFilters();
  // useEffect(() => {
  //   getAllFilters().then((value) => setFilters(value));
  //   getAllProducts().then((products) => setProducts(products));
  // }, []);

  // const resetFilters = () => {
  //   console.log("resetFilters");
  // };
  // const getProducts = () => {
  //   console.log("filtersChange And Get Products");
  // };

  return (
    <>
      {/* <Filters
        filters={filters}
        onReset={resetFilters}
        onChange={getProducts}
      /> */}

      <div className="flex justify-center">
        <div className="mx-auto">
          <div className="flex justify-center flex-wrap gap-x-4 pb-24">
            {AllProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="col-lg-3 col-md-4 col-6 my-product-div my-2"
                >
                  <Link to={`/products/${product.id}`} ><ProductCard product={product} /></Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
