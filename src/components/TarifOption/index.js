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

class TarifOption extends React.Component {
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

        {this.props.row7 ? (
          <LightRow>
            <Check />
            <Description>{this.props.row7}</Description>
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
          <Button>Finish now</Button>
        </Link>
      </Container>
    )
  }
}

export default TarifOption
