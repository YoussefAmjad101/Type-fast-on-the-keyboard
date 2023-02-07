import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <a
                target="_blank"
                className="footer-link"
                href="http://localhost:3000"
                rel="noreferrer"
            >
               Created by Youssef Amjad &copy;
            </a>
        </div>
    );
};

export default Footer;