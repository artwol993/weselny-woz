import React from "react";
import "../style/logo.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import LogoIcon from "./logo-icon";

function Logo() {
  return (
    <>
      <Container>
        <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
          <div className="box mb-2  d-flex flex-column justify-content-center align-items-center">
            <LogoIcon />
            <Card.Title>WESELNY WÓZ</Card.Title>
          </div>
        </Card.Body>
      </Container>
    </>
  );
}

export default Logo;
