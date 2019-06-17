import React from "react";
import "./Orders.css";
import Order from "./Order/Order";
import orderinfo from "./ordersinfo";

const orders = props => (
  <div className="orders">
    <div className="header">
      <h3>Orders</h3>
      <div className="date">
        <i className="fa fa-calendar" />
        <p>12/02/19- 13/02-19</p>
      </div>
    </div>
    <div className="orders-list">
      {orderinfo.map((i, j) => (
        <Order key={j} name={i.name} price={i.price} percent={i.percent} />
      ))}
    </div>
  </div>
);
export default orders;
