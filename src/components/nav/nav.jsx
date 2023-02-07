import React from "react";
import "./nav.css";
import logo from "./../../assets/ofppt.png";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <p className="flash-logo-text-1">OFPPT Skills</p>
                <img className="flash-logo" src={logo} alt="logo" />
            </div>
            <p className="flash-logo-text-1">Type It Fast!</p>
            <div className="nav-right">
                <a
                    target="_blank"
                    className="nav-aam-link"
                    href="http://localhost:3000"
                    rel="noreferrer"
                >
                    
                </a>
            </div>
        </div>
    );
};

export default Nav;