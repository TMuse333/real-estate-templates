import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import search from '../media/search_bar.jpeg';

const Navbar2 = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#'>Chris Musial</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#process'>Process</Nav.Link>
          <Nav.Link href='#about'>About</Nav.Link>
          <Nav.Link href='#contact'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <img src={search} alt='Search' />
    </Navbar>
  );
};

export default CustomNavbar;
