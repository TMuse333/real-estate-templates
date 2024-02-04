import React from "react";
import { useState,useEffect } from "react";
import './navbar3.css'
import { Link } from "react-router-dom";

const Navbar3 = () => {






      



    const handleSecondaryClick = (index) => {
        setSecondaryMenu(index)
        if(secondaryMenu != null && secondaryClicked){
            setSecondaryMenu(null)
        }
        setSecondaryClicked(!secondaryClicked)
    }

    const secondaryStyle = {
        right: secondaryClicked ? '0%' : '-500%',
        top:'-6%',
        transition:'all 0.2s ease-in',
         padding:'0 1rem 0 1rem',
         backgroundColor: isClicked ? '#0e232a' : null
    }

    const secondaryDesktopStyle = {
        opacity: secondaryMenu != null ? 1 : 0,
        width:'fit-content',
        height:'max-content',
        position:'absolute',
        left:'5.5%',
        top:'20%'
        // height:'30px'
    }

    

const navStyle = {
    right: isClicked || secondaryMenu != null ? '0%' : '-50%',
    top:'0%',
   transition:'right 0.2s ease-in',
    padding:'0 1rem 0 1rem',
    backgroundColor: isClicked  || secondaryMenu != null ? '#0e232a' : null
}

const serviceMenu = 
     (
        <ul className="nav3-menu-secondary"
        style={secondaryDesktopStyle}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={() => handleMouseLeave()}>
            <p className="back-button"
            onClick={()=>handleSecondaryClick()}>
                Back
            </p>
        <li>Web dev
        </li>
        <li>
            Copywriting
        </li>
        <li>
            Quantum Realm Inquiries
        </li>
        </ul>
    )

    const aboutMenu = (

        <ul className="nav3-menu-secondary"
        style={secondaryDesktopStyle}
        onMouseLeave={() => handleMouseLeave()}
        >
             <p className="back-button"
             onClick={()=>handleSecondaryClick()}
           
             >
                Back
            </p>
            <li>
                Our story
            </li>
            <li>
                About the team
            </li>
            <li>
                Samurai
            </li>
        </ul>
    )

    const secondaries = [
        serviceMenu,
        aboutMenu,
    ]

    const desktopStyle = {
        // backgroundColor: secondaryMenu != null ?'#00bfff' : '#00bfff',
        marginTop:'3rem',
        height:'50px'
    }


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
