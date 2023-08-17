import React from "react";
import "../style/quality.css";
import qualityCar from "../assets/qualityCar.png";
import qualityTeam from "../assets/qualityTeam.png";
import qualityProffesional from "../assets/qualityProffesional.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Quality() {
  return (
    <section id="Quality" className="quality-container p-5">
      <Container>
        <Row className="text-center g-4">
          <Col md>
            <div className=" text-white adv-card">
              <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                <div className="mb-2 box-circle">
                  <img className="quality-icon" src={qualityCar} alt="dos" />
                </div>
                <Card.Title className=" mb-3">Flota</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum in aspernatur accusamus ipsa ea sunt saepe.
                  Deleniti, mollitia beatae fugiat inventore dicta quidem quod
                  non dolorum nam tempore suscipit obcaecati!
                </Card.Text>
              </Card.Body>
            </div>
          </Col>
          <Col md>
            <div className=" text-white adv-card">
              <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                <div className="mb-2 box-circle">
                  <img className="quality-icon" src={qualityTeam} alt="dos" />
                </div>
                <Card.Title className=" mb-3">Zespół</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum in aspernatur accusamus ipsa ea sunt saepe.
                  Deleniti, mollitia beatae fugiat inventore dicta quidem quod
                  non dolorum nam tempore suscipit obcaecati!
                </Card.Text>
              </Card.Body>
            </div>
          </Col>
          <Col md>
            <div className=" text-white adv-card">
              <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                <div className="mb-2 box-circle">
                  <img
                    className="quality-icon"
                    src={qualityProffesional}
                    alt="dos"
                  />
                </div>
                <Card.Title className=" mb-3">Profesjonalizm</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum in aspernatur accusamus ipsa ea sunt saepe.
                  Deleniti, mollitia beatae fugiat inventore dicta quidem quod
                  non dolorum nam tempore suscipit obcaecati!
                </Card.Text>
              </Card.Body>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Quality;
