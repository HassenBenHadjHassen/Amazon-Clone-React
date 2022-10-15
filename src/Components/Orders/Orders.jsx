/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Orders.css";

//Components
import { useStateValue } from "../../StateProvider";
import { db } from "../../firebase";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className={innerWidth > 650 ? "orders" : "orders__phone"}>
      <div style={{marginTop: "25px"}}></div>
      <h1>Your Orders</h1>
      {user ? (
        <div className="orders__order">
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </div>
      ) : (
        <h3 className="orders__warning">Please Sign in to see your orders</h3>
      )}
    </div>
  );
}

export default Orders;
