import React from "react";
import "../style/terms.css";
import Container from "react-bootstrap/Container";

function Terms() {
  return (
    <section id="terms" className="terms-container p-5">
      <Container>
        <h2 className="terms-title text-center mb-2">
          Podstawowe warunki usługi
        </h2>
        <div className="terms-item">
          <p class="h5">100 km od Łukowa w cenie!</p>
          <p>Zacznij swoją podróż bez dodatkowych kosztów.</p>
        </div>
        <div className="terms-item">
          <p class="h5">Pierwsze 5 godzin gratis</p>
          <p>Potrzebujesz więcej czasu? Zaproponujemy Ci korzystną ofertę.</p>
        </div>
        <div className="terms-item">
          <p class="h5">Profesjonalizm za kierownicą</p>
          <p>
            Za kierownicą zawsze znajduje się jeden z naszych doświadczonych
            kierowców.
          </p>
        </div>
        <div className="terms-item">
          <p class="h5">Elastyczny zasięg</p>
          <p> Obsługujemy tereny w promieniu aż 150 km od Łukowa.</p>
        </div>
        <div className="terms-item">
          <p class="h5">Personalizacja</p>
          <p>Chcesz unikalne dekoracje? Dostosujemy auto do Twojego stylu.</p>
        </div>
      </Container>
    </section>
  );
}

export default Terms;
