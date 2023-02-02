import React from 'react'
import AboutUs from './about-us'
import WelcomeCarousel from './welcome-carousel'
import Offer from './offer'
import Cars from './cars'
import Contact from './contact'

function Body() {
  return (
    <div>
      <WelcomeCarousel />
      <AboutUs />
      <Offer />
      <Cars />
      <Contact />
    </div>
  )
}

export default Body