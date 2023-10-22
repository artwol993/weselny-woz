import React, { useState } from "react";
import "../style/contact.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Cars from "./gallery-data";

function Contact({ selectedCar, onCarSelect }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCarSelect = (event) => {
    const selectedCarName = event.target.value;
    onCarSelect(selectedCarName);
  };

  const sendEmail = (formData) => {
    emailjs
      .send(
        "service_w63u46p", // Your EmailJS service ID
        "template_f8jtxib", // Your EmailJS template ID
        formData,
        "ARO6YERE-E-Z56lDn" // Your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully: ", response);
          setShowConfirmationModal(true);
        },
        (error) => {
          console.error("Email send error: ", error);
        }
      );
  };

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  return (
    <>
      <section id="contact">
        <Container className="my-5 ">
          <Form
            onSubmit={handleSubmit(sendEmail)}
            action="https://api.emailjs.com/api/v1.0/email/send"
            method="POST"
          >
            <div className="container-contact">
              <div className="container-form">
                <h2> Zapytaj o termin</h2>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridState">
                    <FloatingLabel>Auto</FloatingLabel>
                    <Form.Select
                      {...register("car", { required: "Wybierz auto" })}
                      value={selectedCar || " "}
                      onChange={handleCarSelect}
                      name="car"
                    >
                      <option value="">Wybierz auto...</option>
                      {Cars.map((car) => (
                        <option key={car.id} value={car.name}>
                          {car.name}
                        </option>
                      ))}
                    </Form.Select>
                    {errors.car && <p>{errors.car.message}</p>}
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <FloatingLabel>Termin</FloatingLabel>
                    <Form.Control
                      type="date"
                      name="date"
                      min={new Date().toISOString().split("T")[0]} // Ustawia minimum na dzisiejszą datę
                      {...register("date", { required: "Podaj datę" })}
                    />
                    {errors.date && <p>{errors.date.message}</p>}
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="city-name">
                    <FloatingLabel controlId="city" label="Miejscowość">
                      <Form.Control
                        type="city"
                        name="city"
                        {...register("city", {
                          required: "Podaj nazwę miejscowości",
                        })}
                      />
                    </FloatingLabel>
                    {errors.city && <p>{errors.city.message}</p>}
                  </Form.Group>

                  <Form.Group as={Col} controlId="city-zip">
                    <FloatingLabel controlId="formZip" label="Kod pocztowy">
                      <Form.Control
                        type="city-zip"
                        name="city-zip"
                        {...register("zip", {
                          required: "Podaj kod pocztowy",
                          pattern: {
                            value: /^[0-9]{2}-[0-9]{3}$/,
                            message: "Błędny kod pocztowy",
                          },
                        })}
                      />
                    </FloatingLabel>
                    {errors.zip && <p>{errors.zip.message}</p>}
                  </Form.Group>
                </Row>

                <Form.Group as={Col} controlId="user-name" className="mb-3">
                  <FloatingLabel controlId="floatingInput" label="Imię">
                    <Form.Control
                      type="name"
                      name="name"
                      {...register("name", {
                        required: "Podaj imię",
                        pattern: {
                          value: /^[A-Za-z ]+$/,
                          message: "Błędne imie",
                        },
                      })}
                    />
                  </FloatingLabel>
                  {errors.name && <p>{errors.name.message}</p>}
                </Form.Group>

                <Form.Group as={Col} controlId="user-email" className="mb-3">
                  <FloatingLabel controlId="floatingInput" label="Email">
                    <Form.Control
                      type="email"
                      name="email"
                      {...register("email", {
                        required: "Podaj Email",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Błędny email",
                        },
                      })}
                    />
                  </FloatingLabel>
                  {errors.email && <p>{errors.email.message}</p>}
                </Form.Group>

                <Form.Group as={Col} controlId="user-phone" className="mb-3">
                  <FloatingLabel controlId="floatingInput" label="Telefon">
                    <Form.Control
                      type="phone"
                      name="phone"
                      {...register("phone", {
                        required: "Podaj Numer telefonu",
                        pattern: {
                          value: /^[0-9]{9}$/,
                          message: "Błędny numer telefonu",
                        },
                      })}
                    />
                  </FloatingLabel>
                  {errors.phone && <p>{errors.phone.message}</p>}
                </Form.Group>

                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Dodatkowe informacje"
                >
                  <Form.Control
                    as="textarea"
                    name="comment"
                    placeholder="Zostaw komentarz"
                    style={{ height: "200px" }}
                    {...register("comment", {
                      maxLength: {
                        value: 500,
                        message: "Przekroczyłeś maksymalną ilość znaków",
                      },
                    })}
                  />
                </FloatingLabel>
                {errors.comment && <p>{errors.comment.message}</p>}

                <div className="d-grid gap-2 m-3">
                  <Button size="lg" type="submit" className="contact-button">
                    Proszę o wycenę
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </Container>
      </section>

      {showConfirmationModal && (
        <Modal
          show={showConfirmationModal}
          onHide={() => setShowConfirmationModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Wiadomość wysłana</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Dziękujemy za wysłanie zapytania. Skontaktujemy się z Tobą
            najszybciej jak to możliwe!
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowConfirmationModal(false)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default Contact;
