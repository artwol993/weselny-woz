import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => {
      setIsDisplayed(true);
      scroll.scrollTo(document.getElementById("about").offsetTop, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const toggleMenu = () => {
    console.log("Przed zmianą:", isOpen);
    setIsOpen((prevIsOpen) => {
      console.log("W trakcie zmiany, poprzedni stan:", prevIsOpen);
      return !prevIsOpen;
    });
  };

  return (
    <>
      <section className={`header-section ${isVisible ? "is-visible" : ""}`}>
        <div className={`h-container ${isDisplayed ? "displayed" : "hidden"}`}>
          <div className="h-container">
            <div
              className={`hamburger ${isOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <div className="hamburger-bar"></div>
              <div className="hamburger-bar"></div>
              <div className="hamburger-bar"></div>
            </div>
            {/* Menu mobilne */}
            <ul className={`mobile-nav ${isOpen ? "active" : ""}`}>
              <li className="h-c-list">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Start
                </Link>
              </li>
              <li className="h-c-list">
                <Link
                  to="about-us"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  O nas
                </Link>
              </li>
              <li className="h-c-list">
                <Link
                  to="terms"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Oferta
                </Link>
              </li>
              <li className="h-c-list">
                <Link
                  to="gallery"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Nasze Samochody
                </Link>
              </li>
              <li className="h-c-list">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
            {/* Menu desktopowe */}
            <ul className="desktop-nav">
              <li className="h-c-list">
                <Link to="home" smooth={true} duration={500}>
                  Start
                </Link>
              </li>
              <li className="h-c-list">
                <Link to="about-us" smooth={true} duration={500}>
                  O nas
                </Link>
              </li>
              <li className="h-c-list">
                <Link to="terms" smooth={true} duration={500}>
                  Oferta
                </Link>
              </li>
              <li className="h-c-list">
                <Link to="gallery" smooth={true} duration={500}>
                  Nasze Samochody
                </Link>
              </li>
              <li className="h-c-list">
                <Link to="contact" smooth={true} duration={500}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;

/*
import React from "react";
import "../style/header.scss";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "./logo";

function Header() {
  return (
    <>
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
    </>
  );
}

export default Header;
*/
