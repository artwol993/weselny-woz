import React from "react";
import AboutUs from "./about-us";
import Banner from "./banner";
import WelcomeCarousel from "./welcome-carousel";
import Offer from "./offer";
import Gallery from "./gallery";
import PhotoBlock from "./photo-block";
import Contact from "./contact";

function Body() {
  return (
    <div>
      <WelcomeCarousel />
      <AboutUs />
      <Banner />
      <Offer />
      <Gallery />
      <PhotoBlock />
      <Contact />
    </div>
  );
}

export default Body;
