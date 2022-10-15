/* eslint-disable no-restricted-globals */
import React from "react";
import "./Checkout.css";

//Components
import { useStateValue } from "../../StateProvider";
import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";

function Checkout() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  window.scrollTo(0, 0);

  return (
    <div className="checkout__container">
      {innerWidth > 1028 ? (
        <div className="checkout">
          <div className="checkout__left">
            <img
              className="checkout__ad"
              src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
              alt=""
            />

            <div>
              <h2 className="checkout__title">Your shopping Basket</h2>
              {/* Basket Item */}
              {basket.length > 0 ? (
                basket.map(({ id, title, price, rating, src }) => (
                  <BasketItem
                    id={id}
                    key={Math.random()}
                    title={title}
                    price={price}
                    rating={rating}
                    src={src}
                  />
                ))
              ) : (
                <h3 style={{ paddingTop: "10px" }}>
                  Your basket is empty, consider adding items.
                </h3>
              )}
            </div>
          </div>

          <div className="checkout__right">
            <Subtotal />
          </div>
        </div>
      ) : (
        <div className="checkout">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />

          <Subtotal />

          <div>
            <h2 className="checkout__title">Your shopping Basket</h2>
            {/* Basket Item */}
            {basket.length > 0 ? (
              basket.map(({ id, title, price, rating, src }) => (
                <BasketItem
                  id={id}
                  key={Math.random()}
                  title={title}
                  price={price}
                  rating={rating}
                  src={src}
                />
              ))
            ) : (
              <h3 style={{ paddingTop: "10px" }}>
                Your basket is empty, consider adding items.
              </h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
