import React from "react";
import "../style/footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
// import phone from "../assets/phone.png";

function Footer() {
  return (
    <>
      <section className="footer">
        <Container>
          <h3>Skontaktuj się z nami</h3>
          <Row>
            <Col>
              <p>555666333</p>
            </Col>
            <Col>biuro@rent-car.pl</Col>
          </Row>
          <Row>
            <p>fb</p>
            <p>int</p>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;
