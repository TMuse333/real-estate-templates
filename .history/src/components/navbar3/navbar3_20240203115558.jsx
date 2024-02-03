import React from "react";
import { useState } from "react";
import './navbar3.css'

const Navbar3 = () => {

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

const navStyle = {
    right: isClicked ? '0%' : '-50%',
    top:'10%',
   transition:'all 0.2s ease-in',
    padding:'0 1rem 0 1rem'
}

const secondaryContents = {
    return (
        <ul>
        <li>
        </li>
    )
}

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

 
                <p className="x-button"
                onClick={()=>handleClick()}>X</p>
<ul>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
    <button className="nav3-button">
        Book A Call
    </button>

</ul>
</div>
            </div>
        </nav>
    );
}

export default Navbar3;
