import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container-fluid p-0">
      <div className="d-flex flex-row justify-content-between ifinish1">
        <div className="finish">IFINISH</div>
        <div className="text-white">LOGIN?SIGNUP</div>
      </div>
      <div className="d-flex flex-row justify-content-between nav_links1">
        <div className="d-flex flex-row nav_links ">
          <a href="">EVENTS</a>

          <a href="">SHOP</a>
          <a href="">ACHIEVEMENTS</a>
          <a href="">EVENT ORGANIZERS</a>
          <a href="">LIVE TRACKING</a>
          <a href="">VIRTUAL RACES</a>
        </div>
        <div className="mobile">
          <p>+919985100008|support@ifinish.in</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
