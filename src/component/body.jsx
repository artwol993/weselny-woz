import React from 'react'
import WelcomeCarousel from './welcome-carousel'
import AboutUs from './about-us'
import Baner from './baner'
import Offer from './offer'
import Cars from './cars'
import Contact from './contact'

function Body() {
  return (
    <>
      <WelcomeCarousel />
      <AboutUs />
      <Offer />
      <Baner />
      <Cars />
      <Contact />
    </>
  )
}

export default Body