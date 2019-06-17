import React from "react";
import "./LeftBar.css";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Message from "./Message/Message";
const Leftbar = () => (
  <div className="leftbar">
    <Logo />
    <Navigation />
    <Message />
  </div>
);
export default Leftbar;
