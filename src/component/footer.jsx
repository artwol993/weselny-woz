import React from "react";
import "../style/footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Instagram } from "../assets/icons/instagram";
import { Facebook } from "../assets/icons/facebook";

function Footer() {
  return (
    <>
      <section className="footer" id="footer">
        <Container fluid>
          <p className="h1 mb-5">Skontaktuj się z nami</p>
          <Row>
            <Container>
              <div className="d-flex justify-content-around">
                <a href="tel:+48796389045" className="footer-link">
                  <p className="h3">796 389 045</p>
                </a>
                <a href="mailto:biuro@weselny-woz.pl" className="footer-link">
                  <p className="h3"> biuro@weselny-woz.pl</p>{" "}
                </a>
              </div>
            </Container>
          </Row>
          <Row>
            <Container>
              <div className="footer-social">
                <a
                  href="https://www.instagram.com"
                  className="footer-social-link"
                >
                  <Instagram />{" "}
                </a>
                <a
                  href="https://www.facebook.com"
                  className="footer-social-link"
                >
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
