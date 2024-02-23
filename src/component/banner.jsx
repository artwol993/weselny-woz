import React from "react";
import { Instagram } from "../assets/icons/instagram";
import "../style/banner.scss";

function Banner() {
  return (
    <section id="banner" className="banner-section">
      <a href="https://www.instagram.com/weselnywoz/" className="banner-link">
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
