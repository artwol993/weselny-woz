import React from "react";
import "../style/header.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "./logo";

function Header() {
  return (
    <>
      <Navbar expand="lg">
        <Container class="d-flex justify-content-space-evenly">
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home">Witaj</Nav.Link>
              <Nav.Link href="#about-us">O nas</Nav.Link>
              <Nav.Link href="#terms">Oferta</Nav.Link>
              <Nav.Link href="#gallery">Nasze Samochody</Nav.Link>
              <Nav.Link href="#contact">Kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
