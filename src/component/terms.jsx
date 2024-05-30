import React from "react";
import "../style/terms.scss";
import Container from "react-bootstrap/Container";

import { motion } from "framer-motion";

function Terms() {
  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section id="terms" className="terms-container">
      <Container>
        <h2 className="terms-title text-center mb-2">
          Podstawowe warunki usługi
        </h2>
        <motion.div
          className="terms-item"
          variants={itemVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="terms-item-title">100 km od Łukowa w cenie!</p>
          <p>Zacznij swoją podróż bez dodatkowych kosztów.</p>
        </motion.div>
        <motion.div
          className="terms-item"
          variants={itemVariantsRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="terms-item-title">Pierwsze 5 godzin za darmo</p>
          <p>Potrzebujesz więcej czasu? Zaproponujemy Ci korzystną ofertę.</p>
        </motion.div>
        <motion.div
          className="terms-item"
          variants={itemVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="terms-item-title">Profesjonalizm za kierownicą</p>
          <p>
            Za kierownicą zawsze znajduje się jeden z naszych doświadczonych
            kierowców.
          </p>
        </motion.div>
        <motion.div
          className="terms-item"
          variants={itemVariantsRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="terms-item-title">Elastyczny zasięg</p>
          <p>Obsługujemy tereny w promieniu aż 150 km od Łukowa.</p>
        </motion.div>
        <motion.div
          className="terms-item"
          variants={itemVariantsLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="terms-item-title">Chcesz unikalne dekoracje?</p>
          <p>
            Dostosujemy auto do Twojego stylu. Posiadamy w ofercie różne
            warianty.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

export default Terms;
