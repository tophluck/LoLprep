import React from "react";

const Navbar = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                <img src="../../../public/images/headmisstress_fiora_icon.png" width="30" height="30" alt="icon" />
            </a>
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/TeamComp">TeamComp Builder</a>
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