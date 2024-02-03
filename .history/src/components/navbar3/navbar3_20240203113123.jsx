import React from "react";
import './navbar3.css'

const Navbar3 = () => {

const navStyle = {
    right: '10%'
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

            </div>
        </nav>
    );
}

export default Navbar3;
