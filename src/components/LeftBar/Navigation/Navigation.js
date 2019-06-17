import React from "react";
import "./Navigation.css";
const navigation = () => (
  <nav>
    <ul>
      <li>
        <a href="/">
          <i className="fa fa-table" />
          Dashboard
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fa fa-shopping-cart" />
          Products
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fa fa-file-text-o" />
          Orders
        </a>
      </li>
      <li>
        <a href="/">
          <i className="fa fa-sellsy" />
          Insight
        </a>
      </li>
      <li>
        <a href="/">
          {" "}
          <i className="fa fa-sun-o" /> Settings
        </a>
      </li>
    </ul>
  </nav>
);
export default navigation;
