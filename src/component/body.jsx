import React from "react";
import AboutUs from "./about-us";
import Banner from "./banner";
import WelcomeCarousel from "./welcome-carousel";
import Quality from "./quality";
import Terms from "./terms";
import Gallery from "./gallery";
import PhotoBlock from "./photo-block";
import Contact from "./contact";
import Instruction from "./instruction";

function Body() {
  const [selectedCar, setSelectedCar] = React.useState(null);

  return (
    <div>
      <WelcomeCarousel />
      <AboutUs />
      <Banner />
      <Quality />
      <Terms />
      <Instruction />
      <Gallery onSelectCar={setSelectedCar} />
      <PhotoBlock />
      <Contact selectedCar={selectedCar} />
    </div>
  );
}

export default Body;
