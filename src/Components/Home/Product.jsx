import React, { forwardRef } from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider.js";

//Components
import Rating from "@mui/material/Rating";

//Notifications
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const Product = forwardRef(({ id, title, price, rating, src }, ref) => {
  const notyf = new Notyf({
    duration: 4000,
    position: {
      x: "right",
      y: "top",
    },
  });

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

    notyf.success({
      message: `${title} has been successfuly added to basket`,
      dismissible: true,
      ripple: true,
    });
  }

  return (
    <div className="product" ref={ref}>
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
});

export default Product;
