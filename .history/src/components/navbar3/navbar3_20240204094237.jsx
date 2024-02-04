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

    if(activeMenuItem === null){
        setActiveMenuItem(index);
    }

    else{
        setActiveMenuItem(null);
    }
   
  };

  const handleBackClick = () => {
    setActiveMenuItem(null)
    console.log('null nation')
  }

  const navStyle = {
    right: navButtonClicked ? '0%' : '-200%',
    transition: 'right 0.3s ease-in',
    paddingTop: '4rem',
    paddingLeft: '2rem',
  };

  const secondaryNavStyle = (index) => {
    const selected = activeMenuItem === index;

    return {
  
        right: selected ? '0%' : '-200%',
        transition: 'right 0.3s ease-in',
        paddingTop: '4rem',
        paddingLeft: '2rem',
        // marginRight:'3.8rem',
        // backgroundColor:'red',
        width:'40vw'
        
      
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
         
            <ul className="nav3-contents"
            style={secondaryNavStyle(0)}>
                  <p className="back-button"
                    onClick={() => handleMenuItemClick(0)}
                     >
                    Back
                </p>
              <li className="sub-li">Web dev</li>
              <li className="sub-li">Copywriting</li>
              <li>Quantum Realm</li>
            </ul>
         
        </li>
        <li onClick={() => handleMenuItemClick(1)}>
          About <FaArrowRight/>
       
            <ul className="nav3-contents"
            style={
                secondaryNavStyle(1) 
            }>
                <p className="back-button"
                onClick={() => handleMenuItemClick(1)}>
                    Back
                </p>
              <li className="sub-li">Our story</li>
              <li className="sub-li">Process</li>
              <li className="sub-li">Our Team</li>
            </ul>
        
        </li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar3;
