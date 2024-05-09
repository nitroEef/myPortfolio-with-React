import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <h3>logo</h3>
      <nav className={`navbar ${isOpen ? "responsive_nav" : ""}`}>
        <a href='/#'>Home</a>
        <a href='/#'>About me</a>
        <a href='/#'>Skills</a>
        <a href='/#'>Projects</a>
        <a href='/#'>Contacts</a>
      </nav>
      <button className="nav-btn" onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Navbar;