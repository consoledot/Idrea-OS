import React from "react";
import "./Logo.css";
import logo from "../../../assests/images/Logo.svg";
const Logo = props => (
  <div className="logo">
    <img src={logo} alt="logo" />
  </div>
);
export default Logo;
