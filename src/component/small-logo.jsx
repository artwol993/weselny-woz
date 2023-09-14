import React from "react";
import "../style/small-logo.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import weselnyWozIcon from "../assets/weselnyWozIcon.png";

function SmallLogo() {
  return (
    <>
      <Container>
        <Card.Body className=" text-center d-flex justify-content-center align-items-center">
          <div className="box-sm d-flex flex-column justify-content-center align-items-center">
            <img className="logo-icon-sm" src={weselnyWozIcon} alt="dos" />
            <div className="logo-tittle-sm">WESELNY WÓZ</div>
          </div>
        </Card.Body>
      </Container>
    </>
  );
}

export default SmallLogo;

