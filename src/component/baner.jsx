import React from 'react'
import { Container } from 'react-bootstrap'
import "../style/baner.css"

function Baner() {
  return (
    <section id="baner">
        <div className="container container-baner">
          <Container>
            <p className="h3">
             Sprawdź nasze promocje!  
            </p>
          </Container>
        </div>
    </section>
  )
}

export default Baner;