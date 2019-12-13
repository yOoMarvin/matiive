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

import firebase from "../../config/firebase"

// init analytics
let analytics = firebase.analytics()

class TarifOption extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    switch (this.props.nudgelevel) {
      case 0:
        switch (this.props.option) {
          case "basic":
            analytics.logEvent("basic_0_click")
            break
          case "comfort":
            analytics.logEvent("comfort_0_click")
            break
          case "top":
            analytics.logEvent("top_0_click")
            break
          default:
            break
        }
        break
      case 1:
        switch (this.props.option) {
          case "basic":
            analytics.logEvent("basic_1_click")
            break
          case "comfort":
            analytics.logEvent("comfort_1_click")
            break
          case "top":
            analytics.logEvent("top_1_click")
            break
          default:
            break
        }
        break
      case 2:
        switch (this.props.option) {
          case "basic":
            analytics.logEvent("basic_2_click")
            break
          case "comfort":
            analytics.logEvent("comfort_2_click")
            break
          case "top":
            analytics.logEvent("top_2_click")
            break
          default:
            break
        }
        break
      default:
        break
    }
  }

  render() {
    return (
      <Container>
        <TopRow>
          <img src={this.props.image} alt="option" />
          <Title>{this.props.title}</Title>
          <p>{this.props.subtitle}</p>
        </TopRow>

        {this.props.row1 ? (
          <LightRow>
            <Check />
            <Description>{this.props.row1}</Description>
          </LightRow>
        ) : (
          <LightRow>
            <Check />
            <Description> </Description>
          </LightRow>
        )}

        {this.props.row2 ? (
          <LightRow>
            <Check />
            <Description>{this.props.row2}</Description>
          </LightRow>
        ) : (
          <LightRow>
            <Check color={"#FFF"} />
            <Description> </Description>
          </LightRow>
        )}

        {this.props.row3 ? (
          <LightRow>
            <Check />
            <Description>{this.props.row3}</Description>
          </LightRow>
        ) : (
          <LightRow>
            <Check color={"#FFF"} />
            <Description> </Description>
          </LightRow>
        )}

        {this.props.row4 ? (
          <LightRow>
            <Check />
            <Description>{this.props.row4}</Description>
          </LightRow>
        ) : (
          <LightRow>
            <Check color={"#FFF"} />
            <Description> </Description>
          </LightRow>
        )}

        {this.props.row5 ? (
          <LightRow>
            <Check />
            <Description>{this.props.row5}</Description>
          </LightRow>
        ) : (
          <LightRow>
            <Check color={"#FFF"} />
            <Description> </Description>
          </LightRow>
        )}

        {this.props.row6 ? (
          <LightRow>
            <Check />
            <Description>{this.props.row6}</Description>
          </LightRow>
        ) : (
          <LightRow>
            <Check color={"#FFF"} />
            <Description> </Description>
          </LightRow>
        )}

        <Price>
          {this.props.price} <span style={{ fontSize: "10px" }}>per month</span>
        </Price>
        <Link to={"/final?" + this.props.linkparameter}>
          <Button onClick={this.handleClick}>Finish now</Button>
        </Link>
      </Container>
    )
  }
}

export default TarifOption
