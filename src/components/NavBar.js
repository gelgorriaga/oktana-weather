import React from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <div className="Navbar">
      <NavLink exact to="/" activeClassName="Navbar-active">
        Home
      </NavLink>
      <NavLink exact to="/chart" activeClassName="Navbar-active">
        Chart
      </NavLink>
      <NavLink exact to="/favorites" activeClassName="Navbar-active">
        Favorites
      </NavLink>
    </div>
  );
};

export default NavBar;
