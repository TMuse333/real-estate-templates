import React, { useState } from "react";
import './navbar3.css';

const Navbar3 = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [serviceClicked, setServiceClicked] = useState(false);
    const [aboutClicked, setAboutClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        setServiceClicked(false);
        setAboutClicked(false);
    };

    const handleSecondaryClick = (menu) => {
        if (menu === 'services') {
            setServiceClicked(!serviceClicked);
            setAboutClicked(false);
        } else if (menu === 'about') {
            setAboutClicked(!aboutClicked);
            setServiceClicked(false);
        }
    };

    const navStyle = {
        right: isClicked ? '0%' : '-50%',
        top: '0%',
        transition: 'all 0.2s ease-in',
        padding: '0 1rem 0 1rem'
    };

    const secondaryStyle = {
        right: serviceClicked || aboutClicked ? '0' : '-500%',
        top: '-6%',
        transition: 'all 0.2s ease-in',
        padding: '0 1rem 0 1rem'
    };

    const serviceMenu = (
        <ul className="nav3-menu-secondary">
            <p onClick={() => handleSecondaryClick('services')}>Back</p>
            <li>Web dev</li>
            <li>Copywriting</li>
            <li>Quantum Realm Inquiries</li>
        </ul>
    );

    const aboutMenu = (
        <ul className="nav3-menu-2">
            <p onClick={() => handleSecondaryClick('about')}>Back</p>
            <li>Our story</li>
            <li>About the team</li>
            <li>The Way of The Samurai</li>
        </ul>
    );

    return (
        <nav className="nav3-container">
            <p className="company-name">Company name</p>
            <div className="nav3-logo" onClick={() => handleClick()}>
                <div className="nav-line" />
                <div className="nav-line" />
                <div className="nav-line" />
            </div>
            <div style={navStyle} className="nav3-menu">
                <div className="nav3-menu-contents">
                    <ul>
                        <p className="x-button" onClick={() => handleClick()}>
                            X
                        </p>
                        <li onClick={() => handleSecondaryClick('services')}>Services</li>
                        <li onClick={() => handleSecondaryClick('about')}>About</li>
                        <li>Contact</li>
                        <button className="nav3-button">Book A Call</button>
                    </ul>
                    <ul className="nav3-menu-2" style={secondaryStyle}>
                        {serviceClicked && serviceMenu}
                        {aboutClicked && aboutMenu}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar3;
