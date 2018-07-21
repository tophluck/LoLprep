import React from "react";
import icon from "./headmisstress_fiora_icon.png";

const Navbar = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img src={icon} width="50" height="50" alt="icon" />
            </a>
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/TeamComp">TeamComp Creator</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/About">About</a>
            </li>
            </ul>
            <ul className="navbar-nav my-lg-0">
            <li className="nav-item ">
                <a className="nav-link" href="/Login">Login</a>
            </li>
            </ul>
        </nav>
  </div>
);

export default Navbar; 