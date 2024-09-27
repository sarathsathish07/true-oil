import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/images/logo2.webp';

function MyNavbar() {
  const [expanded, setExpanded] = useState(false); // State to control toggle
  const navbarRef = useRef(null); // Ref for handling outside click

  // Handle clicking outside to close the dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    }

    // Add event listener for detecting clicks outside
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navbarRef]);

  return (
    <header className='home-header'>
      <Container>
        <Navbar
          ref={navbarRef} // Attach ref to the Navbar
          variant='dark'
          expand='lg'
          collapseOnSelect
          expanded={expanded} // Control toggle state with 'expanded'
          onToggle={() => setExpanded(!expanded)} // Toggle state on click
          className="custom-navbar"
        >
          <LinkContainer to="/">
            <Navbar.Brand className="titleHome">
              <img
                src={logo}
                alt="True Oil Logo"
                style={{ width: '200px', height: 'auto' }} 
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle 
            aria-controls='basic-navbar-nav' 
            className="custom-toggle ms-auto" // Custom class to shift right
            onClick={() => setExpanded(!expanded)} // Toggle the dropdown on click
          />
          <Navbar.Collapse id='basic-navbar-nav' className="justify-content-center">
            <Nav className='ms-auto me-auto nav-link-container'>
              <LinkContainer to="/">
                <Nav.Link className="nav-link-title" onClick={() => setExpanded(false)}>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="nav-link-title" onClick={() => setExpanded(false)}>About Us</Nav.Link>
              </LinkContainer>
              <Nav.Link className="nav-link-title" onClick={() => setExpanded(false)}>Products</Nav.Link>
              <Nav.Link className="nav-link-title" onClick={() => setExpanded(false)}>Services</Nav.Link>
              <Nav.Link className="nav-link-title" onClick={() => setExpanded(false)}>Partners</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default MyNavbar;
