import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <>
      <section>
        <Container fluid className="my-5 ">
          <h2> Zapytaj o termin</h2>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <FloatingLabel>Auto</FloatingLabel>
                <Form.Select defaultValue="Choose...">
                  <option>Car1</option>
                  <option>Car2</option>
                  <option>Car3</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <FloatingLabel>Termin</FloatingLabel>
                <Form.Control type="date" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="city-name">
                <FloatingLabel controlId="city" label="Miejscowość">
                  <Form.Control type="city" placeholder="Warszawa" />
                </FloatingLabel>
              </Form.Group>

              <Form.Group as={Col} controlId="city-zip">
                <FloatingLabel as={Col} controlId="formZip">
                  <Form.Label>Kod pocztowy</Form.Label>
                  <Form.Control />
                </FloatingLabel>
              </Form.Group>
            </Row>

            <Form.Group as={Col} controlId="user-name" className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Imię">
                <Form.Control type="name" placeholder="name" />
              </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col} controlId="user-email" className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Email">
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col} controlId="user-phone" className="mb-3">
              <FloatingLabel controlId="floatingInput" label="Telefon">
                <Form.Control type="phone" placeholder="+48 111222333" />
              </FloatingLabel>
            </Form.Group>

            <FloatingLabel
              controlId="floatingTextarea2"
              label="Dodatkowe informacje"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "200px" }}
              />
            </FloatingLabel>
            <div className="d-grid gap-2 m-3">
              <Button variant="secondary" size="lg">
                Proszę wycenę
              </Button>
            </div>
          </Form>
        </Container>
      </section>
    </>
  );
}

export default Contact;
