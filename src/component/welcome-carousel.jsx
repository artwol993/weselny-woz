import Carousel from 'react-bootstrap/Carousel';
import "../style/welcome-carousel.css";
import wc1 from "../assets/wc1.jpg";
import wc2 from "../assets/wc2.jpg";
import wc3 from "../assets/wc3.png"

function WelcomeCarousel() {
  return (
    <Carousel variant="dark" fade>
      <Carousel.Item>
        <img
          className="d-block w-100 wc-image"
          src={wc1}
          alt="First slide"
          style={{ maxHeight: '800px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 wc-image"
          src={wc2}
          alt="Second slide"
          style={{ maxHeight: '800px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 wc-image"
          src={wc3}
          alt="Third slide"
          style={{ maxHeight: '800px' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default WelcomeCarousel;