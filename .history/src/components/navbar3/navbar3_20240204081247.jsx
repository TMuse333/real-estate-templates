import React from "react";
import { useState,useEffect } from "react";
import './navbar3.css'
import { Link } from "react-router-dom";

const Navbar3 = () => {

const 

    return (
        <nav className="nav3-container">
            <Link to='/'>

  
            <p className="company-name">Company name</p>
            </Link>
            <div className="nav3-logo"
           >
                <div className="nav-line"/>
                <div className="nav-line"/>
                <div className="nav-line"/>
            </div>

            <ul className="nav3-contents">
    <li>
        Services
        <ul>
            {/* <li>Web dev</li>
            <li>Copywriting</li>
            <li>Quantum Realm</li> */}
        </ul>
    </li>
    <li>
        About
        <ul>
            {/* <li>Our story</li>
            <li>Process</li>
            <li>Our Team</li> */}
        </ul>
    </li>
    <li>Contact</li>
</ul>



               </nav>
    );
}

export default Navbar3;
