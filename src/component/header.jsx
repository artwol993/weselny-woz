import React from "react";
import "../style/header.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "./logo";

function Header() {
  return (
    <>
      <Navbar
        expand="lg"
        className="navbar-dark"
        aria-label="Header"
        fixed="top"
        data-bs-spy="scroll"
        data-bs-target=".navbar"
      >
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle as="button" className="navbar-toggler-custom" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
