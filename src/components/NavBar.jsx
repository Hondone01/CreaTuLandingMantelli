import React from 'react'
import CartWidget from "./CartWidget";
import logo from "../assets/logomonster.png";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo de la tienda" className="logo" /> 
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;