import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../style/welcome-carousel.css";
import Cars from "./cars-data";

function WelcomeCarousel() {
  const [items, setItems] = useState(Cars);

return (
  <>
    <section id="cars" className="container-cars">
     
        {Array.from({ length: 1 }).map(() =>
          items.map((elem) => {
            const { id, name, image } = elem;

            return (
              <Carousel variant="dark" fade>
              <Carousel.Item>
               <img
                 className="d-block w-100 wc-image"
                 src={image}
                 alt={name}
                 style={{ maxHeight: "800px" }} />
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="d-block w-100 wc-image"
                 src={image}
                 alt={name}
                 style={{ maxHeight: "800px" }} />
             </Carousel.Item>
             <Carousel.Item>
               <img
                   className="d-block w-100 wc-image"
                   src={image}
                   alt={name}
                   style={{ maxHeight: "800px" }} />
               </Carousel.Item>
              </Carousel>
            );
          })
        )}

    </section>
  </>
);
}

export default WelcomeCarousel;
