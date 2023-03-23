import React from "react";
import { Instagram } from "../assets/icons/instagram";
import "../style/banner.css";

function Banner() {
  return (
    <section id="banner" className="banner-section">
      <a href="https://www.instagram.com">
        <div className="banner-container">
          <span className="banner-p">
            Sprawdź nasze promocje <Instagram />
          </span>
        </div>
      </a>
    </section>
  );
}

export default Banner;
