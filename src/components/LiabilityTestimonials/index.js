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
        description="Manchmal ist es einfach so nervig, mit Leuten zu diskutieren und sich um alles zu kümmern. Dank der tollen Partnerservices der matiive Top Versicherung lief alles reibungslos und ich habe viel Zeit und Frust gespart"
        avatar={lena}
        avatarName="Lena, 27"
      />
      <Testimonial
        description="I lost my keys while shopping. This is a shock when you arrive at home! With the support of matiive, I was able to quickly fix everything and have my lock replaced."
        avatar={luise}
        avatarName="Luise, 29"
      />
    </Container>
  )
}
