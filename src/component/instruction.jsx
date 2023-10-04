import React from "react";
import "../style/instruction.css";
import { Container } from "react-bootstrap";

function Instruction() {
  return (
    <>
      <section id="instruction" className="instruction-section">
        <Container>
          <div className="instruction-container">
            {/* Pierwsza Część */}
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">Rezerwacja samochodu</h2>
                <p className="section-subheading">
                  Rezerwacja z nami to prosty i szybki proces. Wszystko
                  sprowadza się do pięciu łatwych kroków. Zachęcamy do
                  skorzystania z naszego formularza rezerwacyjnego!
                </p>
              </div>
            </div>

            {/* Druga Część */}
            <div className="steps-row">
              <div className="step">
                <div className="step-circle">1</div>
                Wybierz samochód
              </div>
              <div className="step">
                <div className="step-circle">2</div>
                Wypełnij formularz
              </div>
              <div className="step">
                <div className="step-circle">3</div>
                Poczekaj na wycenę
              </div>
              <div className="step">
                <div className="step-circle">4</div>
                Podpisz umowę
              </div>
              <div className="step">
                <div className="step-circle">5</div>
                Baw się dobrze!
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Instruction;
