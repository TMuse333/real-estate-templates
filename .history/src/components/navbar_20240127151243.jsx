import React, { useState } from 'react';
import '../styles/navbar.css';
import search from '../media/search_bar.jpeg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar-container ${menuOpen ? 'menu-open' : ''}`}>
      <p>Chris Musial</p>

      <div className='list-search-box'>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>

  

        <img src={search} alt='Search' />
      </div>

        <ul>
            <li>Home</li>
        </ul>
    </div>
  );
};

export default Navbar;
