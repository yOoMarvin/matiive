import React from "react"
import { Container } from "./style"

import Testimonial from "../Testimonial"

import paul from "../../assets/paul.png"
import lena from "../../assets/lena.png"
import luise from "../../assets/luise.png"

export const LiabilityTestimonials = () => {
  return (
    <Container>
      <Testimonial
        description="The support of matiive is excellent! The claims settlement runs without problems. The damage during a move was quickly taken over."
        avatar={paul}
        avatarName="Paul, 32"
      />
      <Testimonial
        description="Sometimes it's just so annoying to talk to people and take care of everything. Thanks to the great partner services of matiive Top Versicherung everything went smoothly and I saved a lot of time and frustration"
        avatar={lena}
        avatarName="Lena, 27"
      />
      <Testimonial
        description="I lost my keys while shopping. This is a shock when you arrive at home! With the support of matiive, I was able to quickly fix everything and got my lock replaced."
        avatar={luise}
        avatarName="Luise, 29"
      />
    </Container>
  )
}
