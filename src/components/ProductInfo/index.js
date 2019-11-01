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
            <Fat>{this.props.price}</Fat>
            <Fat>{this.props.about}</Fat>
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
