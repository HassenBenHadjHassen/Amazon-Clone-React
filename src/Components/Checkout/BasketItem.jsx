import React from "react";
import "./BasketItem.css";

//Components
import Rating from "@mui/material/Rating";
import { useStateValue } from "../../StateProvider";

function BasketItem({ id, title, price, rating, src, hideButton }) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    })
  };

  return (
    <div className="basketItem">
      <img className="basketItem__image" src={src} alt="" />
      <div className="basketItem__info">
        <p className="basketItem__title">{title}</p>
        <p className="basketItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <Rating
          className="basketItem__rating"
          name="half-rating-read"
          defaultValue={rating}
          precision={0.25}
          readOnly
        />{" "}
        <br />
        <button hidden={hideButton} onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default BasketItem;
