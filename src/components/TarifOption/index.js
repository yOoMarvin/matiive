import React from "react"
import { Link } from "react-router-dom"

import {
  Container,
  TopRow,
  LightRow,
  Description,
  Button,
  Price,
  Title,
} from "./style"
import { Check } from "react-feather"

export default function TarifOption(props) {
  return (
    <Container>
      <TopRow>
        <img src={props.image} alt="option" />
        <Title>{props.title}</Title>
        <p>{props.subtitle}</p>
      </TopRow>

      {props.row1 ? (
        <LightRow>
          <Check />
          <Description>{props.row1}</Description>
        </LightRow>
      ) : (
        <LightRow>
          <Check />
          <Description> </Description>
        </LightRow>
      )}

      {props.row2 ? (
        <LightRow>
          <Check />
          <Description>{props.row2}</Description>
        </LightRow>
      ) : (
        <LightRow>
          <Check color={"#FFF"} />
          <Description> </Description>
        </LightRow>
      )}

      {props.row3 ? (
        <LightRow>
          <Check />
          <Description>{props.row3}</Description>
        </LightRow>
      ) : (
        <LightRow>
          <Check color={"#FFF"} />
          <Description> </Description>
        </LightRow>
      )}

      {props.row4 ? (
        <LightRow>
          <Check />
          <Description>{props.row4}</Description>
        </LightRow>
      ) : (
        <LightRow>
          <Check color={"#FFF"} />
          <Description> </Description>
        </LightRow>
      )}

      {props.row5 ? (
        <LightRow>
          <Check />
          <Description>{props.row5}</Description>
        </LightRow>
      ) : (
        <LightRow>
          <Check color={"#FFF"} />
          <Description> </Description>
        </LightRow>
      )}

      {props.row6 ? (
        <LightRow>
          <Check />
          <Description>{props.row6}</Description>
        </LightRow>
      ) : (
        <LightRow>
          <Check color={"#FFF"} />
          <Description> </Description>
        </LightRow>
      )}

      <Price>
        {props.price} <span style={{ fontSize: "10px" }}>per month</span>
      </Price>
      {/* <Link to={"/final"}>
        <Button>Finish now</Button>
      </Link> */}
    </Container>
  )
}
