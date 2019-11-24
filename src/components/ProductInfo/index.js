import React from "react"
import { CheckCircle } from "react-feather"
import {
  Container,
  Title,
  SubTitle,
  Content,
  Left,
  DetailContainer,
  Row,
  Text,
  Button,
  Right,
  Fat,
  Image,
  Info,
} from "./style"

class ProductInfo extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        <SubTitle>{this.props.subtitle}</SubTitle>
        <Content>
          <Left>
            <h1>Our promise.</h1>
            <p>{this.props.price}</p>
            <br />
            <Info>
              <h1>Why is a private liability insurance useful?</h1>
              <p>
                The private liability insurance of <i>matiive</i> takes over for
                you compensation claims against third parties and defends
                against unjustified claims without further costs for you - if
                necessary, even in court. In addition, it offers you numerous
                important insurance benefits, such as:
              </p>
            </Info>

            <DetailContainer>
              <Row>
                <CheckCircle />
                <Text>{this.props.info1}</Text>
              </Row>
              <Row>
                <CheckCircle />
                <Text>{this.props.info2} </Text>
              </Row>
              <Row>
                <CheckCircle />
                <Text>{this.props.info3} </Text>
              </Row>
              <Row>
                <CheckCircle />
                <Text>{this.props.info4}</Text>
              </Row>
              <Row>
                <CheckCircle />
                <Text>{this.props.info5}</Text>
              </Row>
              <Row>
                <CheckCircle />
                <Text>{this.props.info6}</Text>
              </Row>
            </DetailContainer>
            <Button>Check out the options!</Button>
          </Left>
          <Right>
            <Image src={this.props.image} alt="Liability Insurance" />
          </Right>
        </Content>
      </Container>
    )
  }
}

export default ProductInfo
