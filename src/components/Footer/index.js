import React from "react"
import { Link } from "react-router-dom"
import { Container } from "./style"

export default function Footer() {
  return (
    <Container>
      <span>Copyright 2019 </span>
      <Link to="/disclaimer">Disclaimer</Link>
    </Container>
  )
}
