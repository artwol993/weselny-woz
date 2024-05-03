import React from "react";

import { motion } from "framer-motion";
import "../style/about-us.scss";

function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section id="about-us">
      <div className="container container-about-us">
        <motion.div
          className="about-us-box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <p className="about-us-txt">
            W naszej firmie "Weselny Wóz" jesteśmy przekonani, że droga, która
            prowadzi do uroczystości ślubnej, jest nie mniej ważna niż sam ślub.
            Dlatego już od 2023 roku nie tylko dostarczamy luksusowe środki
            transportu, ale przede wszystkim kreujemy niezapomniane wspomnienia.
            Nasza pasja i oddanie temu, co robimy, przyczyniły się do zdobywania
            serc wielu par młodych w okolicach Łukowa (Lubelskie), oraz w takich
            miastach jak Warszawa, Lublin czy Białystok.
          </p>
        </motion.div>
        <motion.div
          className="about-us-box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <p className="about-us-txt">
            W naszej firmie "Weselny Wóz" jesteśmy przekonani, że droga, która
            prowadzi do uroczystości ślubnej, jest nie mniej ważna niż sam ślub.
            Dlatego już od 2023 roku nie tylko dostarczamy luksusowe środki
            transportu, ale przede wszystkim kreujemy niezapomniane wspomnienia.
            Nasza pasja i oddanie temu, co robimy, przyczyniły się do zdobywania
            serc wielu par młodych w okolicach Łukowa (Lubelskie), oraz w takich
            miastach jak Warszawa, Lublin czy Białystok.
          </p>
        </motion.div>
        <motion.div
          className="about-us-box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <p className="about-us-txt">
            Nasza misja to nie tylko zapewnienie transportu - to gwarancja
            wyjątkowości, elegancji oraz niezawodności w każdym calu.
            Profesjonalny zespół firmy "Weselny Wóz" jest zawsze gotowy sprostać
            oczekiwaniom nawet najbardziej wymagających klientów, dbając o
            każdy, nawet najdrobniejszy detal.
          </p>
        </motion.div>
        <motion.div
          className="about-us-box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <p className="about-us-txt">
            Wybierając nas, wybierasz nie tylko luksusowy środek transportu, ale
            przede wszystkim pewność, że każdy moment spędzony z nami stanie się
            wyjątkowym wspomnieniem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
