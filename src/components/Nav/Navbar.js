import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div id="main_nav">
      <nav className="navbar glass_background">
        <div className="container">
          <div className="nav_left">
            <NavLink to="/">LOGO</NavLink>
          </div>
          <div className="nav_rigth">
            <NavLink to="/">LOGO</NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
