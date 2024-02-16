import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.scss";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart, IoIosAddCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const cartQuantity = cartItems.length;
  return (
    <div id="main_nav">
      <nav className="navbar glass_background">
        <div className="container">
          <div className="nav_left">
            <NavLink to="/">E-COM</NavLink>
            <NavLink to="/">Products</NavLink>
            <NavLink
              to="/add-product"
              style={{ display: "flex", gap: ".2rem", alignItems: "center" }}
            >
              Add Product <IoIosAddCircleOutline />
            </NavLink>
          </div>
          <div className="nav_rigth">
            <NavLink to="/">
              <IoMdCart /> <span className="badge">{cartQuantity}</span>
            </NavLink>
            <NavLink to="/">
              <FaUserCircle />
            </NavLink>
          </div>
        </div>
      </nav>
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default Navbar;
