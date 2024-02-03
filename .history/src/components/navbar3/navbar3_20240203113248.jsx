import React from "react";
import './navbar3.css'

const Navbar3 = () => {

const navStyle = {
    right: '10%',
    top:'0%'
}

    return (
        <nav className="nav3-container">
            <p className="company-name">Company name</p>
            <div className="nav3-logo">
                <div className="nav-line"/>
                <div className="nav-line"/>
                <div className="nav-line"/>
            </div>
            <div style={navStyle}
            className="nav3-menu">
<ul>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>

</ul>
            </div>
        </nav>
    );
}

export default Navbar3;
