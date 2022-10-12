import React, { useEffect, useState } from "react";
import "./Payment.css";

//Components
import { useStateValue } from "../../StateProvider";
import BasketItem from "../Checkout/BasketItem";
import { Link, useNavigate } from "react-router-dom";
import Email from "../Email";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import axios from "../../axios.js";
import { db } from "../../firebase";

//Icons
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Payment() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [succeded, setSucceded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    async function getClientSecret() {
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${
          Math.floor(getBasketTotal(basket) * 100) + 1
        }`,
      });

      setClientSecret(response.data.clientSecret);
    }

    getClientSecret();
  }, [basket]);

  async function handleSubmit(event) {
    //Do fancy stripe shiiit
    event.preventDefault();

    setProcessing(true);

    // eslint-disable-next-line no-unused-vars
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            email: user?.email,
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });
        navigate("/orders", { replace: true });
      });

    console.log(clientSecret);
  }

  function handleChange(event) {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }

  return (
    <div className="payment">
      <div className="payment__arrow">
        <a href="#end">
          <ArrowDownwardIcon style={{ fontSize: 40 }} />
        </a>
      </div>

      <div className="payment__container">
        <h1 id="start">
          Checkout(
          <Link to="/checkout">
            {basket.length} {basket.length > 1 ? "items" : "item"}
          </Link>
          )
        </h1>

        {/* Delivery Section */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>
              {user ? (
                Email()
              ) : (
                <span style={{ color: "red" }}>Please Sign in first</span>
              )}
            </p>
            <p>Address</p>
            <p>City, State, Zip Code</p>
            <p>Country</p>
          </div>
        </div>
        {/* Products Section */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review item(s) and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <BasketItem
                id={item.id}
                key={Math.random()}
                title={item.title}
                price={item.price}
                src={item.src}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment Section */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {
              <form onSubmit={handleSubmit}>
                {user ? (
                  <CardElement onChange={handleChange} />
                ) : (
                  <p style={{ color: "red" }}>
                    Please Sign in to complete The transaction.
                  </p>
                )}

                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <h3>Order total: {value}</h3>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />

                  <button
                    id="end"
                    disabled={!user || processing || disabled || succeded}
                  >
                    <span>
                      {processing ? <p>Processing</p> : "Complete Transaction"}
                    </span>
                  </button>
                </div>

                {/* Errors */}
                {error && <div>{error}</div>}
              </form>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
