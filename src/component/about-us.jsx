import React from "react";
import { Container } from "react-bootstrap";
import "../style/about-us.css";

function AboutUs() {
  return (
    <section id="about-us">
      <div className="container container-about-us">
        <Container>
          <p class="h5">
            W "Weselnym Wozie" wierzymy, że droga do ślubu jest równie ważna jak
            sama uroczystość. Dlatego od 2023 roku dostarczamy nie tylko
            luksusowe auta, ale także niezapomniane wspomnienia. Nasza pasja i
            zaangażowanie w to, co robimy, pozwoliły nam zdobyć zaufanie wielu
            par młodych. Dzięki naszemu doświadczeniu i dbałości o każdy detal,
            możemy zagwarantować, że podróż z nami będzie jednym z
            najpiękniejszych momentów tego wyjątkowego dnia. Nasz zespół,
            składający się z profesjonalistów, jest zawsze gotowy, aby sprostać
            oczekiwaniom nawet najbardziej wymagających klientów. Wybierając
            "Weselny Wóz", wybierasz nie tylko transport, ale przede wszystkim
            niezawodność, styl i elegancję
          </p>
        </Container>
      </div>
    </section>
  );
}

export default AboutUs;
