import React from "react"
import useForm from "react-hook-form"

import { Container, Input, FormGroup, Button, Image } from "./style"
import final from "../../assets/final.png"

export default function FinalForm() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
  }
  console.log(errors)

  return (
    <Container>
      <div>
        <p>
          Since we are not yet officially launched with our matiive insurance,
          everything is still a little in its infancy. We would like to thank
          you for your trust and let you know as soon as something new happens.
        </p>
        <br />
        <p>
          Just let us know your email address and we'll send you everything new
          about matiive. No Spam Ever! Pinky Promise!
        </p>
        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <div style={{ height: "32px" }} />
            <label>Name:</label>
            <Input
              type="text"
              placeholder="John Doe"
              value=""
              ref={register({ required: true })}
            />
          </FormGroup>
          <FormGroup>
            <div style={{ height: "32px" }} />
            <label>E-mail:</label>
            <Input
              type="text"
              placeholder="john@doe.com"
              value=""
              ref={register({ required: true })}
            />
          </FormGroup>
          <Button type="submit">Submit!</Button>
        </form>
      </div>
      <Image src={final} alt="confetti" />
    </Container>
  )
}
