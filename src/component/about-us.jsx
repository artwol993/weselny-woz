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
            W firmie "Weselny Wóz" jesteśmy przekonani, że droga do uroczystości ślubnej jest równie ważna, jak sam ślub. Od 2023 roku dostarczamy luksusowe środki transportu, tworząc niezapomniane wspomnienia. Nasza pasja do perfekcji zdobyła serca wielu par młodych w Łukowie, Warszawie, Lublinie i Białymstoku.
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
            Nasza misja to nie tylko zapewnienie transportu, ale także gwarancja wyjątkowości, elegancji i niezawodności. Profesjonalny zespół firmy "Weselny Wóz" zawsze spełnia oczekiwania nawet najbardziej wymagających klientów, dbając o każdy szczegół.
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
            Oferujemy eleganckie samochody ślubne, idealne na Twój wielki dzień. Nasz doświadczony zespół zapewnia najwyższy poziom obsługi, dbając o każdy detal. Dostosowujemy dekoracje samochodów do Twoich potrzeb i preferencji.
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
            Chcesz uczynić swój ślub jeszcze bardziej wyjątkowym? Skontaktuj się z nami i dowiedz się więcej o naszych usługach wynajmu samochodów na ślub w Łukowie, Warszawie, Lublinie i Białymstoku. Wybierając nas, wybierasz luksusowy środek transportu oraz pewność, że każdy moment spędzony z nami stanie się wyjątkowym wspomnieniem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
