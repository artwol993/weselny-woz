import React from "react";
import "../style/terms.scss";
import Container from "react-bootstrap/Container";

function Terms() {
  return (
    <section id="terms" className="terms-container">
      <Container>
        <h2 className="terms-title text-center">Podstawowe warunki usługi</h2>

        <div className="terms-item">
          <p className="terms-item-title">100 km od Łukowa w cenie!</p>
          <p>Zacznij swoją podróż bez dodatkowych kosztów.</p>
        </div>

        <div className="terms-item">
          <p className="terms-item-title">Pierwsze 5 godzin za darmo</p>
          <p>Potrzebujesz więcej czasu? Zaproponujemy Ci korzystną ofertę.</p>
        </div>

        <div className="terms-item">
          <p className="terms-item-title">Profesjonalizm za kierownicą</p>
          <p>
            Za kierownicą zawsze znajduje się jeden z naszych doświadczonych
            kierowców.
          </p>
        </div>
        <div className="terms-item">
          <p className="terms-item-title">Elastyczny zasięg</p>
          <p>Obsługujemy tereny w promieniu aż 150 km od Łukowa.</p>
        </div>
        <div className="terms-item">
          <p className="terms-item-title">Chcesz unikalne dekoracje?</p>
          <p>
            Dostosujemy auto do Twojego stylu. Posiadamy w ofercie różne
            warianty.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Terms;
