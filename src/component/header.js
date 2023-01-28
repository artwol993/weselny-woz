import React from 'react';
import "../style/header.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'


function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Rent Car</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">Witaj</Nav.Link>
          <Nav.Link href="#about-us">O nas</Nav.Link>
          <Nav.Link href="#offer">Oferta</Nav.Link>
          <Nav.Link href="#cars">Samochody</Nav.Link>
          <Nav.Link href="#news">Aktualności</Nav.Link>
          <Nav.Link href="#contact">Kontakt</Nav.Link>
            <NavDropdown title="Język" id="nav-dropdown">
              <NavDropdown.Item eventKey="1.1">PL</NavDropdown.Item>
              <NavDropdown.Item eventKey="1.2">EN</NavDropdown.Item>
              <NavDropdown.Item eventKey="1.3">UA</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
  )
}

export default Header