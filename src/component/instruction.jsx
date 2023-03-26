import React from "react";
import "../style/instruction.css";
import { Container } from "react-bootstrap";
import { Rings } from "../assets/images/rings";

function Instruction() {
  return (
    <>
      <section
        id="instruction"
        className="section-instruction"
        style={{ backgroundImage: `url(${Rings})` }}
      >
        <Container>
          <div>
            <p>krok pierwszy</p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Instruction;
