import React, { useState } from 'react';
import '../styles/navbar.css';
import search from '../media/search_bar.jpeg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isMobile, setIsMobile] = useState(false)

  const navStyle = {
    height: !menuOpen ? '0' : '100px',
    overflowY:'hidden',
    transition:'height 0.3s ease-in',
    backgroundColor: '#333',
    marginTop:'-0.5rem'

  }

  const navStyle2 = {
    position:'absolute',
    right:'10%'
  }

  return (
    <div className='nav-wrapper'>


    <nav className='navbar-container'>
        <div className='navbar-contents'>

<div className='desktop-menu'>
 
    <p>About</p>
    <Link to='overview'>
      
    </Link>
    <p>Process</p>
    <p>Contact</p>
    <img src={search}
    style={{
        height:'25px'
    }}/>


</div>
  
      <p className='name'>Chris Musial</p>

      <div className='list-search-box'
   >
        <div className={`menu-icon ${menuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>

  

        <img src={search} alt='Search' />
      </div>
      </div>

        <ul 
        style={navStyle}
        className='nav-list'>
            <li>Home</li>
            <li>Process</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    </div>
  );
};

export default Navbar;
