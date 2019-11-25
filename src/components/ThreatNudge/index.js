import React from "react"

import { Container, TextContainer, Row, Image } from "./style"

import paul from "../../assets/paul.png"

// Styling in index.css
function ThreatNudge() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container>
        <Row>
          <img
            src={paul}
            alt="user"
            style={{ width: "64px", height: "64px", marginRight: "16px" }}
          />
          <h3>Paul, 32 </h3>
        </Row>

        <h2>
          "I had never thought how many things such a damange could include..."
        </h2>
        <Row>
          <Image
            src="https://images.unsplash.com/photo-1456964513482-f21a68af77ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80"
            alt="bicycle crashing"
          />
          <TextContainer>
            <p>
              I bumped into a pedestrian while cycling. He sufferd severe
              injuries from the collision and also demanded compensation for the
              damages. I had never thought how many things such a damage could
              include: compensation for pain, pension payments, loss of wages,
              costs for a nanny.
            </p>
            <p>The loss amount was around $30,000.</p>
            <p>
              I'm so glad that I had a private liabilty insurance like{" "}
              <i>matiive</i> that saved my life by covering all the costs!
            </p>
          </TextContainer>
        </Row>
      </Container>
    </div>
  )
}

export default ThreatNudge
