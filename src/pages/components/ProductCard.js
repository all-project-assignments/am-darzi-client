import React, { useState } from "react";
import PropTypes from "prop-types";

const ProductCard = ({ product, custom }) => {
  const [defaultImage, setDefaultImage] = useState(true);
  const { mainImage, heading, price, sizes, lowerSection } = product;

  const toggleImage = () => setDefaultImage((prev) => !prev);

  return (
    <div className={`sustainable-card product-card `}>
      <div
        className="img-div"
        // onMouseEnter={toggleImage}
        // onMouseLeave={toggleImage}
      >
        <img
          src={`${defaultImage ? mainImage : lowerSection.image}`}
          alt="..."
          className={`img-fluid ${custom} cursor-pointer`}
        />
      </div>
      <div className="sustainable-card-content">
        <p className="sustainble-card-data-head">{heading}</p>
        <p className="suit-price">{price}$</p>
        <div className="size-wrapper">
          <p className="size-head">Available Size</p>
          <ul className="suit-size">
            {sizes.map((size) => (
              <li key={size} className="size-items">
                {size}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.prototype = { product: PropTypes.object };

// ProductCard.defaultProps = { product: "https://images.ctfassets.net/w2dr5qwt1rrm/1g8TCBlQdADqeLnI040GRV/828ffd73c9091606457c5c2fb99f3fba/SS23_ssutainable.jpg?w=960&fit=fill&q=70&fm=webp" };
