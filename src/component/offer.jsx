import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../assets/2.jpg"

function Offer() {
  return (
    <CardGroup className='m-5'>
    <Card border="info" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://thenounproject.com/api/private/icons/5469157/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABj2YX4FjBYLLHqU9dQmqENFg2QUliRkGFev5AY6Ty4SCCawu_JbWC42hMzrJU3IfJBp6_jDn2VTqBOL26DOjGDq20kAw%3D%3D" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card border="info" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://static.thenounproject.com/attribution/416360-600.png" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to
          additional content.{' '}
        </Card.Text>
      </Card.Body>
    </Card>
    <Card border="info" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://thenounproject.com/api/private/icons/421805/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABj2YX4FjBYLLHqU9dQmqENFg2QUliRkGFev5AY6Ty4SCCawu_JbWC42hMzrJU3IfJBp6_jDn2VTqBOL26DOjGDq20kAw%3D%3D" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </Card.Text>
      </Card.Body>
    </Card>
  </CardGroup>
);
}

export default Offer