import React from "react"
import useForm from "react-hook-form"
import { useHistory } from "react-router-dom"
import { Heading, SectionHeading } from "../Page"
import { FormGroup, Label, Input, Row, Button } from "./style"

export default function Form() {
  const { register, handleSubmit, errors } = useForm()
  let history = useHistory()
  const onSubmit = data => {
    console.log(data)
    history.push("/liability")
  }
  console.log(errors)

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={handleSubmit(onSubmit)}
      action="/liability"
    >
      <div style={{ height: "16px" }} />
      <Row>
        <div>
          <Heading>Gender</Heading>
          <FormGroup>
            <Label>
              <Input
                name="gender"
                type="radio"
                value="male"
                ref={register({ required: true })}
              />
              Male
            </Label>

            <Label>
              <Input
                name="gender"
                type="radio"
                value="female"
                ref={register({ required: true })}
              />
              Female
            </Label>

            <Label>
              <Input
                name="gender"
                type="radio"
                value="diverse"
                ref={register({ required: true })}
              />
              Diverse
            </Label>
          </FormGroup>
        </div>

        {/* <div>
          <Heading>Date of Birth</Heading>
          <FormGroup>
            <input
              name="Family status"
              type="date"
              ref={register({ required: true })}
            />
          </FormGroup>
        </div> */}
      </Row>
      <div style={{ height: "32px" }} />

      <Row>
        <div>
          <Heading>Housing</Heading>
          <FormGroup>
            <Label>
              <Input
                name="housing"
                type="radio"
                value="rent"
                ref={register({ required: true })}
              />
              Rent
            </Label>
            <Label>
              <Input
                name="housing"
                type="radio"
                value="property"
                ref={register({ required: true })}
              />
              Property
            </Label>
          </FormGroup>
        </div>

        <div>
          <Heading>Family Status</Heading>
          <FormGroup>
            <Label>
              <Input
                name="family"
                type="radio"
                value="single"
                ref={register({ required: true })}
              />
              Single
            </Label>
            <Label>
              <Input
                name="family"
                type="radio"
                value="family"
                ref={register({ required: true })}
              />
              Family
            </Label>
          </FormGroup>
        </div>
      </Row>

      <SectionHeading>
        <Button type="submit">Check out the options</Button>
      </SectionHeading>
    </form>
  )
}
