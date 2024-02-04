import React from "react";
import { useState,useEffect } from "react";
import './navbar3.css'
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

const Navbar3 = () => {

const [navButtonClicked, setNavButtonClicked] = useState(false)

const [secondaryNavClicke]

const handleNavClick = () => {
    setNavButtonClicked(!navButtonClicked)
}

const navStyle = {
    right:navButtonClicked ? '0%' : '-200%',
    transition: 'right 0.3s ease-in',
 paddingTop:'4rem',
 paddingLeft:'2rem',
}




    return (
        <nav className="nav3-container">
            <Link to='/'>

  
            <p className="company-name">Company name</p>
            </Link>
            <div className="nav3-logo"
            onClick={()=>handleNavClick()}
           >
                <div className="nav-line"/>
                <div className="nav-line"/>
                <div className="nav-line"/>
            </div>



            <ul className="nav3-contents"
            style={navStyle}>
                <p className="x-button"
                   onClick={()=>handleNavClick()}>
                    X
                </p>
    <li>
        Services <FaArrowRight/>
        <ul>
            <li>Web dev</li>
            <li>Copywriting</li>
            <li>Quantum Realm</li>
        </ul>
    </li>
    <li>
        About <FaArrowRight/>
        <ul>
            <li>Our story</li>
            <li>Process</li>
            <li>Our Team</li>
        </ul>
    </li>
    <li>Contact</li>
</ul>




               </nav>
    );
}

export default Navbar3;
