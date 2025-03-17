import React from "react";
import "./Header.css";
import GourmetDashLogo from "../../assets/gourmet-dash-logo-transparent.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src={GourmetDashLogo}
          alt="Gourmet Dash Logo - A food delivery service"
        />
      </div>

      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
