import React from "react";
import "../style/terms.css";
import Container from "react-bootstrap/Container";

function Terms() {
  return (
    <section id="Terms" className="terms-container p-5">
      <Container>
        <h2 className="terms-title text-center mb-5">
          Podstawowe warunki usługi
        </h2>
        <div className="terms-item">
          <p>
            <b>100 km od Łukowa w cenie!</b> Zacznij swoją podróż bez
            dodatkowych kosztów.
          </p>
        </div>
        <div className="terms-item">
          <p>
            <b>Pierwsze 5 godzin gratis</b> Potrzebujesz więcej czasu?
            Zaproponujemy Ci korzystną ofertę.
          </p>
        </div>
        <div className="terms-item">
          <p>
            <b>Profesjonalizm za kierownicą</b> Za kierownicą zawsze znajduje
            się jeden z naszych doświadczonych kierowców.
          </p>
        </div>
        <div className="terms-item">
          <p>
            <b>Elastyczny zasięg</b> Obsługujemy tereny w promieniu aż 300 km od
            Łukowa.
          </p>
        </div>
        <div className="terms-item">
          <p>
            <b>Personalizacja</b> Chcesz unikalne dekoracje? Dostosujemy auto do
            Twojego stylu.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Terms;
