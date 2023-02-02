import React from 'react'
import AboutUs from './about-us'
import WelcomeCarousel from './welcome-carousel'
import Offer from './offer'
import Cars from './cars'

function Body() {
  return (
    <div>
      <WelcomeCarousel />
      <AboutUs />
      <Offer />
      <Cars />
    </div>
  )
}

export default Body