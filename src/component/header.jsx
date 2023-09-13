import React, { useState, useEffect } from "react";
import "../style/header.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "./logo";
import SmallLogo from "./small-logo";

function Header() {
  const [isHeaderReduced, setIsHeaderReduced] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsHeaderReduced(true);
      } else {
        setIsHeaderReduced(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" className="navbar-dark" aria-label="Header">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home">
            {isHeaderReduced ? <SmallLogo className="small-logo" /> : <Logo />}
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
    </>
  );
}

export default Header;
