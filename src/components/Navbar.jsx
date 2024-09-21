import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/images/logo2-removebg-preview.png'; 

function MyNavbar() {
  return (
    <header>
      <Container>
        <Navbar
          variant='dark'
          expand='lg'
          collapseOnSelect
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
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className="justify-content-center">
            <Nav className='ms-auto me-auto nav-link-container'>
              <LinkContainer to="/">
                <Nav.Link className="nav-link-title">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="nav-link-title">About Us</Nav.Link>
              </LinkContainer>
              <Nav.Link className="nav-link-title">Products</Nav.Link>
              <Nav.Link className="nav-link-title">Services</Nav.Link>
              <Nav.Link className="nav-link-title">Partners</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default MyNavbar;
