import React, { useState } from "react";
import Cars from "./gallery-data";
import "../style/gallery.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

function Gallery({ onSelectCar }) {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleImageClick = (imageUrl, gallery, name, description) => {
    setSelectedImage({ imageUrl, gallery, name, description });

    onSelectCar(name);

    setShowModal(true);
  };

  const handleSelectCar = (carName) => {
    onSelectCar(carName);
  };

  return (
    <section id="gallery" className="container-gallery">
      <Row
        activeIndex={index}
        onSelect={handleSelect}
        xs={1}
        sm={2}
        md={3}
        lg={4}
        xl={5}
        className="g-4"
      >
        {Cars.map((car) => (
          <Col>
            <Card key={car.id}>
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
                    car.description
                  )
                }
              />
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>
                  <p>{car.price}</p>
                  <p>{car.description}</p>
                </Card.Text>
                <Button
                  variant="secondary"
                  onClick={() => handleSelectCar(car.name)}
                >
                  Zarezerwuj
                </Button>
                {""}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
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
            <p>{selectedImage.description}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Zarezerwuj</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Gallery;
