import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";
import { hy } from '../../assets';

NDODONDKOENWKOENOIWEIOEIEOJIEIEIEE
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
     <img className='fir'src={hy} alt="bb" /> 
      
      <nav className={`navbar ${isOpen ? "responsive_nav" : ""}`}>
        <a href="/#">Home</a>
        <a href="/#">About me</a>
        <a href="/#">Skills</a>
        <a href="/#">Projects</a>
        <a href="/#">Contacts</a>
      </nav>
      <div className="nav-btn menu-con">
        <button className="nav-btn" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
