import React from "react"
import { Link } from "react-router-dom"

import { Container, Logo, Blue } from "./style"

export default function(Header) {
  return (
    <Container>
      <Link to="/">
        <Logo>
          <Blue>matiive</Blue> insurance.
        </Logo>
      </Link>
    </Container>
  )
}
