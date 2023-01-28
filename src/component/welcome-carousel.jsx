import Carousel from 'react-bootstrap/Carousel';
import "../style/welcome-carousel.css";

function WelcomeCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/210156/pexels-photo-210156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
          style={{ maxHeight: '800px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/13696704/pexels-photo-13696704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
          style={{ maxHeight: '800px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/6260612/pexels-photo-6260612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
          style={{ maxHeight: '700px' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default WelcomeCarousel;