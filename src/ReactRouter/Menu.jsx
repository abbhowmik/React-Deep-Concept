import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <>
      <div className="container my-5 text-center">
        <NavLink exact activeClassName="active_class " to="/">
          About Us
        </NavLink>
        <br />
        <NavLink exact activeClassName="active_class " to="/contact">
          Contact Us
        </NavLink>
        <br />
        <NavLink exact activeClassName="active_class " to="/service">
          Our Services
        </NavLink>
      </div>
      <div className="container mb-5 my-4 text-center">
        <a href="/">About Us</a>
        <br />
        <a href="/contact">Contact Us</a>
        <br />
        <a href="/service">Our Services</a>
      </div>
    </>
  );
};

export default Menu;
