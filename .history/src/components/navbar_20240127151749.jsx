import React, { useState } from 'react';
import '../styles/navbar.css';
import search from '../media/search_bar.jpeg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navStyle = {
    height: !menuOpen ? 0 : '300px'
  }

  return (
    <div className='navbar-container'>
        <div className='navbar-contents'>

  
      <p>Chris Musial</p>

      <div className='list-search-box'
      >
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>

  

        <img src={search} alt='Search' />
      </div>
      </div>

        <ul style={navStyle}
        className='nav-list'>
            <li>Home</li>
            <li>Process</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  );
};

export default Navbar;
