import React from "react";
import "../style/instruction.scss";
import { Container } from "react-bootstrap";

import { motion } from "framer-motion";

function Instruction() {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

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
              <motion.div
                className="step"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <div className="step-circle">1</div>
                Wybierz samochód
              </motion.div>
              <motion.div
                className="step"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <div className="step-circle">2</div>
                Wypełnij formularz
              </motion.div>
              <motion.div
                className="step"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <div className="step-circle">3</div>
                Poczekaj na wycenę
              </motion.div>
              <motion.div
                className="step"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <div className="step-circle">4</div>
                Podpisz umowę
              </motion.div>
              <motion.div
                className="step"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <div className="step-circle">5</div>
                Baw się dobrze!
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Instruction;
