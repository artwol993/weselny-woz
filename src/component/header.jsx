import React from "react";
import "../style/header.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
<<<<<<< HEAD
// import NavDropdown from 'react-bootstrap/NavDropdown'
=======
>>>>>>> 7c65595d16f46aee5162688631c53788ba1e2c07

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
<<<<<<< HEAD
              {/* <NavDropdown title="Język" id="nav-dropdown">
              <NavDropdown.Item eventKey="1.1">PL</NavDropdown.Item>
              <NavDropdown.Item eventKey="1.2">EN</NavDropdown.Item>
              <NavDropdown.Item eventKey="1.3">UA</NavDropdown.Item>
            </NavDropdown> */}
=======
>>>>>>> 7c65595d16f46aee5162688631c53788ba1e2c07
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
