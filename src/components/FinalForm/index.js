import React, { useContext, useEffect } from "react"
import useForm from "react-hook-form"
import { AppContext } from "../../config/AppContext"

import { Container, Input, FormGroup, Button, Image } from "./style"
import final from "../../assets/final.png"

export default function FinalForm() {
  const [state, setState] = useContext(AppContext)
  useEffect(() => {
    state.postDataWithState(state)
  })

  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    //console.log(data)

    setState(state => ({
      ...state,
      conversion: true,
    }))

    window.location.href = "https://forms.gle/gJjcDaWx6Y5R3xHE8"
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
        <form
          style={{ width: "100%" }}
          onSubmit={handleSubmit(onSubmit)}
          action="https://forms.gle/gJjcDaWx6Y5R3xHE8"
        >
          <FormGroup>
            <div style={{ height: "32px" }} />
            <label>Name:</label>
            <Input
              type="text"
              placeholder="John Doe"
              value=""
              ref={register({ required: false })}
            />
          </FormGroup>
          <FormGroup>
            <div style={{ height: "32px" }} />
            <label>E-mail:</label>
            <Input
              type="text"
              placeholder="john@doe.com"
              value=""
              ref={register({ required: false })}
            />
          </FormGroup>
          <Button type="submit">Submit!</Button>
          <p>
            <i>Continue to our post survey and help us</i>
          </p>
        </form>
      </div>
      <Image src={final} alt="confetti" />
    </Container>
  )
}
