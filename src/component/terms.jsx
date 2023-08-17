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
          <i className="fas fa-route terms-icon"></i>
          <p>
            Do 100 km od Łukowa wliczone w cenę. Dystans powyżej 100 km podlega
            indywidualnej wycenie.
          </p>
        </div>
        <div className="terms-item">
          <i className="fas fa-clock terms-icon"></i>
          <p>
            Pierwsze 5 godzin w cenie; za każdą kolejną obowiązuje dodatkowa
            opłata.
          </p>
        </div>
        <div className="terms-item">
          <i className="fas fa-user-tie terms-icon"></i>
          <p>
            Samochodem zawsze kieruje wyznaczony przez nas profesjonalny
            kierowca.
          </p>
        </div>
        <div className="terms-item">
          <i className="fas fa-map-marker-alt terms-icon"></i>
          <p>Oferujemy usługi w promieniu do 150 km od Łukowa.</p>
        </div>
        <div className="terms-item">
          <i className="fas fa-car-side terms-icon"></i>
          <p>
            Oferujemy możliwość eleganckiego udekorowania auta naszymi
            ekskluzywnymi ozdobami.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Terms;
