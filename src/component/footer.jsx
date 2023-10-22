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
      <section className="footer" id="footer">
        <Container fluid>
          <p className="h1 mb-5">Skontaktuj się z nami</p>
          <Row>
            <Col>
              <Row>
                <a href="tel:+48502992600" className="footer-link">
                  <span className="footer-phone">502 992 600</span>
                </a>
              </Row>
              <Row>
                <a href="tel:+48515212284" className="footer-link">
                  <span className="footer-phone">515 212 284</span>
                </a>
              </Row>
            </Col>
            <Col>
              <a href="mailto:biuro@weselny-woz.pl" className="footer-link">
                <span className="footer-email"> biuro@weselny-woz.pl</span>{" "}
              </a>
            </Col>
          </Row>
          <Row>
            <Container>
              <div className="footer-social">
                <a
                  href="https://www.instagram.com/weselnywoz/"
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
