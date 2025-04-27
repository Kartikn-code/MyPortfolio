// Navbar.js
import React, { useState } from "react";
import { Link } from "react-scroll";
import "./demonav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/4926/4926554.png"
          width="70px"
          height="70px"
          alt=""
          title=""
          class="img-small"
        ></img>
      </div>
      <div className="navbar-container">
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
          <span className={`bar ${isOpen ? "active" : ""}`}></span>
        </div>
        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <Link to="content" smooth={true} duration={20} top={70}>
            Home
          </Link>
          <Link to="aboutme" smooth={true} duration={10}>
            About Me
          </Link>
          <Link to="skills" smooth={true} duration={10}>
            Skills
          </Link>
          <Link to="Education" smooth={true} duration={10}>
            Education
          </Link>
          <Link to="projects" smooth={true} duration={10}>
            Projects
          </Link>
          <Link to="experience" smooth={true} duration={10}>
            Experience
          </Link>
          <Link to="contact" smooth={true} duration={10}>
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
