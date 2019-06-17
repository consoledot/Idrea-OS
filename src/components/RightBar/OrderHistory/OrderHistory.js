import React from "react";
import orderjson from "./ordershistory.json";
import "./OrderHistory.css";
const orderHistory = props => (
  <div className="order-history">
    <h3>Orders History</h3>
    <div>
      <table>
        <tr className="table-head">
          <th>Order Id</th>
          <th>Description</th>
          <th>Payment Method</th>
          <th>Shipping Method</th>
          <th>Order Amount</th>
          <th>Date</th>
          <th>Staus</th>
        </tr>
        {orderjson.map((i, j) => (
          <tr key={j}>
            <td>{i.id}</td>
            <td className="description">{i.description}</td>
            <td>{i.paymentMethod}</td>
            <td>{i.shippingMethod}</td>
            <td>{i.amount}</td>
            <td>{i.date}</td>
            <td>
              <div className={[i.status, "status"].join(" ")}>{i.status}</div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  </div>
);
export default orderHistory;
