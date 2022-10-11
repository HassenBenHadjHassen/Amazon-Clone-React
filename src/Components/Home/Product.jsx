import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider.js";

//Components
import Rating from "@mui/material/Rating";

function Product({ id, title, price, rating, src }) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  function addToBasket() {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        src: src,
      },
    });
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.25}
            readOnly
          />
        </div>
      </div>

      <img src={src} alt="" />

      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
