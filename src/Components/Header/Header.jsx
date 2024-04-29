import React from "react";
import Navigation from "../Navigator/Navigation";
import logo from "../../Assets/logo.svg";
import "./Header.css";

const Header = ({openModal}) => {
  return (
    <header className="Header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Navigation openModal={openModal} />
    </header>
  );
};

export default Header;
