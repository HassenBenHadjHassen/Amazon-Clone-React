import React from "react";
import "./Order.css";

//Components
import moment from "moment";
import BasketItem from "../Checkout/BasketItem";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, hh:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <BasketItem
          id={item.id}
          key={item.key}
          title={item.title}
          price={item.price}
          rating={item.rating}
          src={item.src}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order__total">Order total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100 - 0.01} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
