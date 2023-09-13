import React from "react";
import "../style/header.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "./logo";

function Header() {
  return (
    <>
      <header className="sticky-header">
        <Navbar expand="lg" className="navbar-dark" aria-label="Header">
          <Container className="d-flex justify-content-between">
            <Navbar.Brand href="#home">
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle as="button" className="navbar-toggler-custom" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link key="home" href="#home">
                  Witaj
                </Nav.Link>
                <Nav.Link key="about-us" href="#about-us">
                  O nas
                </Nav.Link>
                <Nav.Link key="terms" href="#terms">
                  Oferta
                </Nav.Link>
                <Nav.Link key="gallery" href="#gallery">
                  Nasze Samochody
                </Nav.Link>
                <Nav.Link key="contact" href="#contact">
                  Kontakt
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
