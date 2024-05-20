import React, { useState } from "react";
import Cars from "./gallery-data";
import "../style/gallery.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

import { motion } from "framer-motion";

function Gallery({ onSelectCar }) {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleImageClick = (imageUrl, gallery, name, year, engine) => {
    setSelectedImage({ imageUrl, gallery, name, year, engine });

    onSelectCar(name);

    setShowModal(true);
  };

  const handleSelectCar = (carName) => {
    onSelectCar(carName);
    setShowModal(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="gallery-header"> Wybierz auto</h2>
      <p className="text-center gallery-txt">
        Podane ceny są cenami orientacyjnymi, aby poznać dokładną cenę wypełnij
        formularz lub skontaktuj się z nami telefonicznie{" "}
      </p>
      <div className="gallery-container">
        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4">
          {Cars.map((car) => (
            <Col key={car.id}>
              <motion.div
                className="Card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                key={car.id}
              >
                <Card>
                  <Card.Img
                    className="box-photo"
                    variant="top"
                    src={car.image}
                    alt={car.name}
                    onClick={() =>
                      handleImageClick(
                        car.image,
                        car.gallery,
                        car.name,
                        car.year,
                        car.engine
                      )
                    }
                  />
                  <Card.Body>
                    <Card.Title>{car.name}</Card.Title>
                    <Card.Text>Cena: {car.price}</Card.Text>
                    <Card.Text>Rok produkcji: {car.year}</Card.Text>
                    <Card.Text>Silnik: {car.engine}</Card.Text>
                    <Button
                      className="gallery-button"
                      onClick={() => {
                        handleSelectCar(car.name);
                        scrollToContact();
                      }}
                    >
                      Zarezerwuj
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)} size="xl">
        <Modal.Body>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="modal-carousel"
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={selectedImage.imageUrl}
                alt="Selected"
              />
            </Carousel.Item>
            {selectedImage.gallery?.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Gallery ${index}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="modal-text">
            <h4>{selectedImage.name}</h4>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex  flex-column justify-content-center align-items-center">
          <Button
            className="b-footer b-reserve"
            onClick={() => {
              handleSelectCar(selectedImage.name);
              scrollToContact();
              setShowModal(false);
            }}
          >
            Zarezerwuj
          </Button>
          <Button
            className="b-footer b-exit"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Chcę wybrać inne auto
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Gallery;
