import React from "react";
import "../style/footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Instagram } from "../assets/icons/instagram";
import { Facebook } from "../assets/icons/facebook";

function Footer() {
  return (
    <>
      <section className="footer">
        <Container fluid>
          <p className="h1 mb-5">Skontaktuj się z nami</p>
          <Row>
            <Col>
              <a href="tel:555666333">
                <div>
                  <p className="h3 text-white">555666333</p>
                </div>
              </a>
            </Col>
            <Col>
              <a href="mailto:biuro@rent-car.pl">
                <p className="h3 text-white"> biuro@rent-car.pl</p>
              </a>
            </Col>
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
