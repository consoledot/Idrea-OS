import React from "react";
import "./Order.css";
import bar1 from "../../../../assests/images/barChart.svg";
import bar2 from "../../../../assests/images/barChart1.svg";
import bar3 from "../../../../assests/images/barChart2.svg";

const order = ({ name, price, percent }) => {
  let bar = "";
  if (name === "Number of Orders") {
    bar = bar3;
  }
  if (name === "Completed Orders") {
    bar = bar2;
  }
  if (name === "Abadoned Orders") {
    bar = bar1;
  }
  return (
    <div className="order">
      <p className="num-of-order">{name}</p>
      <div className="wrapper">
        <div className="order-num">
          <p className="price">{price}</p>
          <p className="percent">{percent}%</p>
        </div>
        <img src={bar} alt="iamge" />
      </div>
    </div>
  );
};
export default order;
