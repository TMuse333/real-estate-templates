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
            onClick={()=>handleClick()}>
                <div className="nav-line"/>
                <div className="nav-line"/>
                <div className="nav-line"/>
            </div>
            <div style={ !isDesktop ? navStyle : null}
            className="nav3-menu"
           >

                <div className="nav3-menu-contents"
               >

 
               
<ul>
<p className="x-button"
                onClick={()=>handleClick()}>X</p>
   
   {isDesktop ? (
        <>


            <li id='services'
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={() => handleMouseLeave()}
            >
                Services
            </li>
            <li
                onMouseEnter={() => handleMouseEnter(1)}
                // onMouseLeave={() => handleMouseLeave()}
            >
                About
            </li>
        </>
          
  
    ) : (
        <>
        <li onClick={() => handleSecondaryClick(0)}>Services</li>
        <li onClick={() => handleSecondaryClick(1)}>About</li>
        </>
    )}
    <li>Contact</li>
    <button className="nav3-button">
        Book A Call
    </button>

</ul>

<ul className="nav3-menu-2"
style={!isDesktop ? secondaryStyle : desktopStyle}

>
    {secondaries[secondaryMenu]}
</ul>
</div>
            </div>
        </nav>
    );
}

export default Navbar3;
