import React from "react";
import "../style/quality.scss";
import qualityCar from "../assets/qualityCar.avif";
import qualityTeam from "../assets/qualityTeam.avif";
import qualityProffesional from "../assets/qualityProffesional.avif";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { motion } from "framer-motion";

function Quality() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const cardVariants1 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const cardVariants2 = {
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section id="quality" className="quality-container">
      <Container>
        <Row className="text-center g-3">
          <Col md>
            <motion.div
              className=" text-white adv-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                <div className="mb-2 box-circle">
                  <img className="quality-icon" src={qualityCar} alt="dos" />
                </div>
                <Card.Title className="quality-title mb-3">
                  Luksus na każdą okazję
                </Card.Title>
                <Card.Text className="quality-text">
                  Wybieraj spośród szerokiej gamy pojazdów, od klasycznych
                  modeli po najnowsze limuzyny. Każdy samochód jest gwarancją
                  komfortu i elegancji, idealnie wpisując się w wyjątkowy
                  charakter tego ważnego dnia.
                </Card.Text>
              </Card.Body>
            </motion.div>
          </Col>
          <Col md>
            <motion.div
              className=" text-white adv-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants1}
            >
              <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                <div className="mb-2 box-circle">
                  <img className="quality-icon" src={qualityTeam} alt="dos" />
                </div>
                <Card.Title className="quality-title mb-3">
                  Zespół pełen pasji
                </Card.Title>
                <Card.Text className="quality-text">
                  Choć nasza firma powstała w 2023 roku, nasi kierowcy i zespół
                  mają lata doświadczenia w branży samochodowej. Dbamy o każdy
                  detal, by Twój wyjątkowy dzień był doskonały. Z nami możesz
                  być pewien, że każdy moment zostanie zaplanowany i
                  zrealizowany z pasją.
                </Card.Text>
              </Card.Body>
            </motion.div>
          </Col>
          <Col md>
            <motion.div
              className=" text-white adv-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants2}
            >
              <Card.Body className=" text-center d-flex flex-column justify-content-center align-items-center">
                <div className="mb-2 box-circle">
                  <img
                    className="quality-icon"
                    src={qualityProffesional}
                    alt="dos"
                  />
                </div>
                <Card.Title className="quality-title mb-3">
                  Perfekcja w każdym szczególe
                </Card.Title>
                <Card.Text className="quality-text">
                  Od momentu rezerwacji aż po zakończenie usługi, dbamy o
                  najwyższe standardy jakości. Nasza flota składa się z
                  najlepiej utrzymanych luksusowych samochodów, a nasi kierowcy
                  są szkoleni, by zapewnić najwyższy poziom bezpieczeństwa i
                  komfortu podczas jazdy.
                </Card.Text>
              </Card.Body>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Quality;
