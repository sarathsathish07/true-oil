import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
          <Navbar.Brand className="titleHome">True Oil</Navbar.Brand>
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
