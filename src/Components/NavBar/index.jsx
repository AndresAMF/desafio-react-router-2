import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/imgs/pokemonLogo.png";

function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "notActive");
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img className="brand-img" src={logo} alt="" />
      </div>
      <div className="navbar-links">
        <NavLink className={setActiveClass} to="/" end>
          Home
        </NavLink>
        {" - "}
        <NavLink className={setActiveClass} to="/Personajes">
          Pokemons
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
