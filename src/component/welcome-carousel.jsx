import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../style/welcome-carousel.scss";
import WelcomeCars from "./carousel-data";

function WelcomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="home" className="welcome-carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {WelcomeCars.map((car) => (
          <Carousel.Item key={car.id}>
            <img
              className="d-block w-100 wc-image"
              src={car.image}
              alt={car.name}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
export default WelcomeCarousel;
