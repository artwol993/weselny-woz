import React, { useState } from "react";
import Cars from "./gallery-data";
import "../style/gallery.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

function Gallery() {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleImageClick = (imageUrl, gallery) => {
    setSelectedImage({ imageUrl, gallery });
    setShowModal(true);
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
                onClick={() => handleImageClick(car.image, car.gallery)}
              />
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>
                  <p>{car.price}</p>
                  <p>{car.description}</p>
                </Card.Text>
                <Button variant="secondary">Zarezerwuj</Button>
                {""}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body>
          <img
            src={selectedImage.imageUrl}
            alt="Selected"
            className="img-fluid"
          />
          <div className="gallery">
            {selectedImage.gallery?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index}`}
                className="img-fluid"
              />
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Gallery;
