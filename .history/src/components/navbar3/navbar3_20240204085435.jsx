import React, { useState } from "react";
import './navbar3.css';
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

const Navbar3 = () => {
  const [navButtonClicked, setNavButtonClicked] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleNavClick = () => {
    setNavButtonClicked(!navButtonClicked);
    setActiveMenuItem(null); // Reset active menu item when clicking on the main nav button
  };

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  const navStyle = {
    right: navButtonClicked ? '0%' : '-200%',
    transition: 'right 0.3s ease-in',
    paddingTop: '4rem',
    paddingLeft: '2rem',
  };

  const secondaryNavStyle = (index) => {
    const selected = activeMenuItem === index;

    return {
        right: selected ? '0'
    }
  }

  return (
    <nav className="nav3-container">
      <Link to='/'>
        <p className="company-name">Company name</p>
      </Link>
      <div className="nav3-logo" onClick={() => handleNavClick()}>
        <div className="nav-line"/>
        <div className="nav-line"/>
        <div className="nav-line"/>
      </div>

      <ul className="nav3-contents" style={navStyle}>
        <p className="x-button" onClick={() => handleNavClick()}>X</p>
        <li onClick={() => handleMenuItemClick(0)}>
          Services <FaArrowRight/>
          {activeMenuItem === 0 && (
            <ul>
              <li>Web dev</li>
              <li>Copywriting</li>
              <li>Quantum Realm</li>
            </ul>
          )}
        </li>
        <li onClick={() => handleMenuItemClick(1)}>
          About <FaArrowRight/>
          {activeMenuItem === 1 && (
            <ul>
              <li>Our story</li>
              <li>Process</li>
              <li>Our Team</li>
            </ul>
          )}
        </li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar3;
