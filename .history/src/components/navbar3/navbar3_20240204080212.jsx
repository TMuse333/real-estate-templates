import React from "react";
import { useState,useEffect } from "react";
import './navbar3.css'
import { Link } from "react-router-dom";

const Navbar3 = () => {






      







    










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
            <ul>
                services
                <li>Web dev</li>
                <li>Copywriting</li>
                <li></li>
            </ul>
         </ul>


               </nav>
    );
}

export default Navbar3;
