import React from "react";
import "./RightBar.css";
import Orders from "../RightBar/Orders/Orders";
import OrderHistory from "../RightBar/OrderHistory/OrderHistory";
import Topbar from "./TopBar/TopBar";

const rightBar = props => (
  <div className="right-bar">
    <Topbar />
    <Orders />
    <OrderHistory />
  </div>
);
export default rightBar;
