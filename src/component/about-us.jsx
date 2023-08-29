import React from "react";
import { Container } from "react-bootstrap";
import "../style/about-us.css";

function AboutUs() {
  return (
    <section id="about-us">
      <div className="container container-about-us">
        <Container>
          <p className="about-us-txt">
            W naszej firmie "Weselny Wóz" jesteśmy przekonani, że droga, która
            prowadzi do uroczystości ślubnej, jest nie mniej ważna niż sam ślub.
            Dlatego już od 2023 roku nie tylko dostarczamy luksusowe środki
            transportu, ale przede wszystkim kreujemy niezapomniane wspomnienia.
            Nasza pasja i oddanie temu, co robimy, przyczyniły się do zdobywania
            serc wielu par młodych w okolicach Łukowa (Lubelskie), oraz w takich
            miastach jak Warszawa, Lublin czy Białystok.
          </p>
          <p className="about-us-txt">
            Nasza misja to nie tylko zapewnienie transportu - to gwarancja
            wyjątkowości, elegancji oraz niezawodności w każdym calu.
            Profesjonalny zespół firmy "Weselny Wóz" jest zawsze gotowy sprostać
            oczekiwaniom nawet najbardziej wymagających klientów, dbając o
            każdy, nawet najdrobniejszy detal.
          </p>
          <p className="about-us-txt">
            Wybierając nas, wybierasz nie tylko luksusowy środek transportu, ale
            przede wszystkim pewność, że każdy moment spędzony z nami stanie się
            wyjątkowym wspomnieniem.
          </p>
        </Container>
      </div>
    </section>
  );
}

export default AboutUs;
