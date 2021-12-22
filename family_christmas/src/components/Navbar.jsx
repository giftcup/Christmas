import React from "react";
import Links from "./Links";
import Logo from "../assets/logo_red.png";
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="links">
        <Links />
      </div>
    </div>
  );
}
export default Navbar;
