import React from "react";
import "../style/logo.scss";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import weselnyWozIcon from "../assets/weselnyWozIcon.png";

function Logo() {
  return (
    <>
      <Container>
        <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
          <div className="box mb-2  d-flex flex-column justify-content-center align-items-center">
            <img className="logo-icon" src={weselnyWozIcon} alt="dos" />
            <div className="logo-tittle">WESELNY WÓZ</div>
          </div>
        </Card.Body>
      </Container>
    </>
  );
}

export default Logo;
