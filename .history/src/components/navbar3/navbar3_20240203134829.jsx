import React from "react";
import { useState } from "react";
import './navbar3.css'

const Navbar3 = () => {

    const [isClicked, setIsClicked] = useState(false)

    const [secondaryClicked, setSecondaryClicked] = useState(false)

    const [secondaryMenu, setSecondaryMenu]

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const handleSecondaryClick = () => {
        setSecondaryClicked(!secondaryClicked)
    }

    const secondaryStyle = {
        right: secondaryClicked ? '0' : '-500%',
        top:'-6%',
        transition:'all 0.2s ease-in',
         padding:'0 1rem 0 1rem'
    }

    

const navStyle = {
    right: isClicked ? '0%' : '-50%',
    top:'0%',
   transition:'all 0.2s ease-in',
    padding:'0 1rem 0 1rem'
}

const serviceMenu = 
     (
        <ul className="nav3-menu-secondary">
            <p onClick={()=>handleSecondaryClick()}>
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

        <ul className="nav3-menu-2">
             <p onClick={()=>handleSecondaryClick()}>
                Back
            </p>
            <li>
                Our story
            </li>
            <li>
                About the team
            </li>
            <li>
                The Way of The Samurai
            </li>
        </ul>
    )

    const secondaries = [
        serviceMenu,
        aboutMenu,
    ]


    return (
        <nav className="nav3-container">
            <p className="company-name">Company name</p>
            <div className="nav3-logo"
            onClick={()=>handleClick()}>
                <div className="nav-line"/>
                <div className="nav-line"/>
                <div className="nav-line"/>
            </div>
            <div style={navStyle}
            className="nav3-menu">

                <div className="nav3-menu-contents">

 
               
<ul>
<p className="x-button"
                onClick={()=>handleClick()}>X</p>
    <li >About</li>
    <li onClick={()=>handleSecondaryClick()}>Services</li>
    <li>Contact</li>
    <button className="nav3-button">
        Book A Call
    </button>

</ul>

<ul className="nav3-menu-2"
style={secondaryStyle}
>
    {serviceMenu}
</ul>
</div>
            </div>
        </nav>
    );
}

export default Navbar3;
