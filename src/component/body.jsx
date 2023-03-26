import React from "react";
import AboutUs from "./about-us";
import Banner from "./banner";
import WelcomeCarousel from "./welcome-carousel";
import Offer from "./offer";
import Cars from "./cars";
import Contact from "./contact";
import Instruction from "./instruction";

function Body() {
  return (
    <div>
      <WelcomeCarousel />
      <AboutUs />
      <Banner />
      <Offer />
      <Instruction />
      <Cars />
      <Contact />
    </div>
  );
}

export default Body;
