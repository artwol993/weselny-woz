import React from "react";
import AboutUs from "./about-us";
import Banner from "./banner";
import WelcomeCarousel from "./welcome-carousel";
import Quality from "./quality";
import Terms from "./terms";
import Gallery from "./gallery";
import PhotoBlock from "./photo-block";
import Contact from "./contact";

function Body() {
  return (
    <div>
      <WelcomeCarousel />
      <AboutUs />
      <Banner />
      <Quality />
      <Terms />
      <Gallery />
      <PhotoBlock />
      <Contact />
    </div>
  );
}

export default Body;
