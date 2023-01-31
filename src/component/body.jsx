import React from 'react'
import AboutUs from './about-us'
import WelcomeCarousel from './welcome-carousel'
import Offer from './offer'

function Body() {
  return (
    <div>
      <WelcomeCarousel />
      <AboutUs />
      <Offer />
    </div>
  )
}

export default Body