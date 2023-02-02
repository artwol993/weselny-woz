import React from 'react'
import "../style/cars.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import cars1 from "../assets/cars1.png"

function Cars() {
  return (
    <section id="cars" className="container-cars">
      <Row xs={1}  sm={2} md={3} lg={4} xl={5} className="g-4">
        {Array.from({ length: 10 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img className="box-photo" variant="top" src={cars1} />
                <Card.Body>
                  <Card.Title>Car title</Card.Title>
                  <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptatibus? Nemo tenetur quam, tempore magnam molestiae voluptatibus beatae aspernatur cum.
                  </Card.Text>
                  <Button variant="secondary">Zarezerwuj</Button>{''}
                </Card.Body>
              </Card>
          </Col>
        ))}
      </Row>
    </section>
 
  )
}

export default Cars