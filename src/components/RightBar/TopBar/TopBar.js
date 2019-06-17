import React from "react";
import "./TopBar.css";
import Search from "./Search/Search";
import Info from "./Info/Info";
const topBar = () => (
  <div className="topbar">
    <Search />
    <Info />
  </div>
);
export default topBar;
