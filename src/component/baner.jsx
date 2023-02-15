import React from 'react'
import { Container } from 'react-bootstrap'
import "../style/baner.css"
import instagram from "../assets/instagram.png"

function Baner() {
  return (
    <section id="baner">
        <div className="container container-baner">
          <Container>
            <p className="h3">
             Sprawdź nasze promocje!  
            </p>
            <img classname="baner-img" src={instagram}></img>
          </Container>
        </div>
    </section>
  )
}

export default Baner;