import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../style/welcome-carousel.css";
import Cars from "./gallery-data";

function WelcomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="welcome" className="welcome-carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {Cars.map((car) => (
          <Carousel.Item key={car.id}>
            <img
              className="d-block w-100 wc-image"
              src={car.image}
              alt={car.name}
            />
            <Carousel.Caption>
              <h3>{car.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
export default WelcomeCarousel;
