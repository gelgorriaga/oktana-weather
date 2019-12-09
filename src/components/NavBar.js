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
      <NavLink exact to="/favs" activeClassName="Navbar-active">
        Favourites
      </NavLink>
    </div>
  );
};

export default NavBar;
