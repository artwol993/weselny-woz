import React from "react";
import { Instagram } from "../assets/icons/instagram";
import "../style/banner.css";

function Banner() {
  return (
    <section id="banner" className="banner-section">
      <a href="https://www.instagram.com">
        <div className="banner-container">
          <p className="banner-p">Sprawdź nasze promocje</p>
          <Instagram />
        </div>
      </a>
    </section>
  );
}

export default Banner;
