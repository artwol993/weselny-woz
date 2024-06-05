import React, { useState } from "react";
import "../style/contact.scss";
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
import emailSended from "../assets/emailSended.avif";
import { motion } from "framer-motion";

function Contact({ selectedCar, onCarSelect }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleCarSelect = (event) => {
    const selectedCarName = event.target.value;
    onCarSelect(selectedCarName);
  };

  const sendEmail = async (formData) => {
    try {
      const response = await emailjs.send(
        "service_w63u46p",
        "template_f8jtxib",
        formData,
        "ARO6YERE-E-Z56lDn"
      );
      console.log("Email sent successfully: ", response);
      setShowConfirmationModal(true);
      reset();
      setTimeout(() => {
        setShowConfirmationModal(false);
      }, 3000);
    } catch (error) {
      console.error("Email send error: ", error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <>
      <section id="contact">
        <Container className="my-5">
          <Form onSubmit={handleSubmit(sendEmail)} noValidate>
            <div className="contact-container">
              <div className="contact-form">
                <h2 className="contact-header">Zapytaj o termin</h2>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                >
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                      <FloatingLabel controlId="car" label="Wybierz auto">
                        <Form.Select
                          {...register("car", { required: "Wybierz auto" })}
                          value={selectedCar || ""}
                          onChange={handleCarSelect}
                          aria-invalid={errors.car ? "true" : "false"}
                        >
                          <option value="" disabled>
                            -- Wybierz auto --
                          </option>
                          {Cars.map((car) => (
                            <option key={car.id} value={car.name}>
                              {car.name}
                            </option>
                          ))}
                        </Form.Select>
                      </FloatingLabel>
                      {errors.car && (
                        <p className="error-message">{errors.car.message}</p>
                      )}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                      <FloatingLabel controlId="date" label="Wybierz datę">
                        <Form.Control
                          type="date"
                          min={new Date().toISOString().split("T")[0]}
                          {...register("date", { required: "Podaj datę" })}
                          aria-invalid={errors.date ? "true" : "false"}
                          onFocus={(e) => e.currentTarget.showPicker()}
                        />
                        {errors.date && (
                          <p className="error-message">{errors.date.message}</p>
                        )}
                      </FloatingLabel>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <FloatingLabel controlId="city" label="Miejscowość">
                        <Form.Control
                          type="text"
                          {...register("city", {
                            required: "Podaj nazwę miejscowości",
                          })}
                          aria-invalid={errors.city ? "true" : "false"}
                        />
                      </FloatingLabel>
                      {errors.city && (
                        <p className="error-message">{errors.city.message}</p>
                      )}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <FloatingLabel controlId="zip" label="Kod pocztowy">
                        <Form.Control
                          type="text"
                          {...register("zip", {
                            required: "Podaj kod pocztowy",
                            pattern: {
                              value: /^[0-9]{2}-[0-9]{3}$/,
                              message: "Błędny kod pocztowy",
                            },
                          })}
                          aria-invalid={errors.zip ? "true" : "false"}
                        />
                      </FloatingLabel>
                      {errors.zip && (
                        <p className="error-message">{errors.zip.message}</p>
                      )}
                    </Form.Group>
                  </Row>

                  <Form.Group
                    as={Col}
                    controlId="formGridName"
                    className="mb-3"
                  >
                    <FloatingLabel controlId="name" label="Imię">
                      <Form.Control
                        type="text"
                        {...register("name", {
                          required: "Podaj imię",
                          pattern: {
                            value: /^[A-Za-z ]+$/,
                            message: "Błędne imię",
                          },
                        })}
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                    </FloatingLabel>
                    {errors.name && (
                      <p className="error-message">{errors.name.message}</p>
                    )}
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId="formGridEmail"
                    className="mb-3"
                  >
                    <FloatingLabel controlId="email" label="Email">
                      <Form.Control
                        type="email"
                        {...register("email", {
                          required: "Podaj Email",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Błędny email",
                          },
                        })}
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                    </FloatingLabel>
                    {errors.email && (
                      <p className="error-message">{errors.email.message}</p>
                    )}
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId="formGridPhone"
                    className="mb-3"
                  >
                    <FloatingLabel controlId="phone" label="Telefon">
                      <Form.Control
                        type="text"
                        {...register("phone", {
                          required: "Podaj Numer telefonu",
                          pattern: {
                            value: /^(?:\+\d{2})?\d{9}$/,
                            message: "Błędny numer telefonu",
                          },
                        })}
                        aria-invalid={errors.phone ? "true" : "false"}
                      />
                    </FloatingLabel>
                    {errors.phone && (
                      <p className="error-message">{errors.phone.message}</p>
                    )}
                  </Form.Group>

                  <Form.Group controlId="formGridComment" className="mb-3">
                    <FloatingLabel
                      controlId="comment"
                      label="Dodatkowe informacje"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Zostaw komentarz"
                        style={{ height: "200px" }}
                        {...register("comment", {
                          maxLength: {
                            value: 500,
                            message: "Przekroczyłeś maksymalną ilość znaków",
                          },
                        })}
                        aria-invalid={errors.comment ? "true" : "false"}
                      />
                    </FloatingLabel>
                    {errors.comment && (
                      <p className="error-message">{errors.comment.message}</p>
                    )}
                  </Form.Group>

                  <div className="d-grid gap-2 m-3">
                    <Button
                      size="lg"
                      type="submit"
                      className="contact-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Wysyłanie..." : "Proszę o wycenę"}
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </Form>
        </Container>
      </section>

      <Modal
        show={showConfirmationModal}
        onHide={() => setShowConfirmationModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Wiadomość wysłana</Modal.Title>
        </Modal.Header>
        <Modal.Body className="contact-modal">
          <img
            className="email-sended-icon"
            src={emailSended}
            alt="email sent"
          />
          <p className="contact-modal-txt">
            Dziękujemy za wysłanie zapytania.
            <br />
            Skontaktujemy się z Tobą najszybciej jak to możliwe!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="contact-button"
            onClick={() => setShowConfirmationModal(false)}
          >
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Contact;
