import React from "react";
import "../style/footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Instagram } from "../assets/icons/instagram";
import { Facebook } from "../assets/icons/facebook";

function Footer() {
  return (
    <>
      <section className="footer">
        <Container fluid>
          <p className="h1 mb-5">Skontaktuj się z nami</p>
          <Row>
            <Container>
              <div className="d-flex justify-content-around">
                <a href="tel:555666333" className="footer-link">
                  <p className="h3 text-white">+48 555 666 333</p>
                </a>
                <a href="mailto:biuro@rent-car.pl" className="footer-link">
                  <p className="h3 text-white"> biuro@rent-car.pl</p>{" "}
                </a>
              </div>
            </Container>
          </Row>
          <Row>
            <Container>
              <div className="footer-social">
                <a href="https://www.instagram.com" className="footer-link">
                  <Instagram />{" "}
                </a>
                <a href="https://www.facebook.com" className="footer-link">
                  <Facebook />{" "}
                </a>
              </div>
            </Container>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;
