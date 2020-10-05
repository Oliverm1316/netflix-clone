import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Netflix_Logo from "./Netflix_Logo.png";
import avatar from "./avatar.jpeg";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className='nav__logo' src={Netflix_Logo} alt='Netflix Logo' />
      <img className='nav__avatar' src={avatar} alt='avatar logo' />
    </div>
  );
};

export default Navbar;
