import React from "react";
import { Instagram } from "../assets/icons/instagram";
import "../style/banner.css";

function Banner() {
  return (
    <section id="banner">
      <div className="banner-container">
        <p className="banner-p">Sprawdź nasze promocje</p>
        <Instagram />
      </div>
    </section>
  );
}

export default Banner;
