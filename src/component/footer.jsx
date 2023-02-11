import React from "react";
import "../style/footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import phone from "../assets/phone.png";
import intstagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

function Footer() {
  return (
    <>
      <section className="footer">
        <Container fluid>
          <p className="h1 mb-5">Skontaktuj się z nami</p>
          <Row>
            <Col>
              <a href="555666333">
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
              <div>
                <img src={intstagram} alt={intstagram}></img>
                <a href="http://www.instagram.com"></a>
                <img src={facebook} alt={facebook}></img>
                <a href="http://www.facebook.com"></a>
              </div>
            </Container>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;
