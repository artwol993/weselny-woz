import React from "react";
import "../style/footer.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Instagram } from "../assets/icons/instagram";
import { Facebook } from "../assets/icons/facebook";

function Footer() {
  return (
    <>
      <section className="footer" id="footer">
        <Container fluid>
          <h2 className="h1 mb-4">Skontaktuj się z nami</h2>
          <Container className="footer-container-contact">
            <Col>
              <Row className="mb-2">
                <a href="tel:+48502992600" className="footer-link">
                  <span className="footer-phone">502 992 600</span>
                </a>
              </Row>
              <Row className="mb-2">
                <a href="tel:+48515212284" className="footer-link">
                  <span className="footer-phone">515 212 284</span>
                </a>
              </Row>
            </Col>
            <Col className="mb-2">
              <a href="mailto:biuro@weselny-woz.pl" className="footer-link">
                <span className="footer-email"> biuro@weselny-woz.pl</span>{" "}
              </a>
            </Col>
          </Container>
          <Row>
            <Container>
              <div className="footer-social">
                <a
                  className="footer-social-link"
                  href="https://www.instagram.com/weselnywoz/"
                >
                  <Instagram />
                </a>
                <a
                  className="footer-social-link"
                  href="https://www.facebook.com"
                >
                  <Facebook />
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
