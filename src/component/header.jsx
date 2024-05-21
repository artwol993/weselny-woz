import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "./logo";
import SmallLogo from "./small-logo";

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
          <div className="logo-container">
            <div
              className={`hamburger ${isOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <div className="hamburger-bar"></div>
              <div className="hamburger-bar"></div>
              <div className="hamburger-bar"></div>
            </div>
            <div className="logo-wrapper">
              <div className="desktop-logo">
                <Logo />
              </div>
              <div className="mobile-logo">
                <SmallLogo />
              </div>
            </div>
          </div>
          <ul className={`mobile-nav ${isOpen ? "active" : ""}`}>
            <li className="h-c-list">
              <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
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
      </section>
    </>
  );
}

export default Header;
