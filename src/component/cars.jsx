import React, {useState} from 'react'
import "../style/cars.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Cars from './cars-data';


function CarsGallery() {

  const [items, setItems] = useState(Cars);

  return (
    <>
      <section id="cars" className="container-cars">
        <Row xs={1}  sm={2} md={3} lg={4} xl={5} className="g-4">
        {Array.from({ length: 1}).map(() => (

          items.map((elem) => {
            const {id, name, image, price, description} = elem;

            return (
              <Col>
                <Card>
                  <Card.Img className="box-photo" variant="top" src={image} alt={name} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                      <p>{price}</p>
                      <p>{description}</p>
                    </Card.Text>
                    <Button variant="secondary">Zarezerwuj</Button>{''}
                  </Card.Body>
                </Card>
              </Col>
          )})   
        ))}
        </Row>
      </section>
    </>
  )
}

export default CarsGallery;