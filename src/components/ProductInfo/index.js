import React from "react"
import { CheckCircle } from "react-feather"
import { Content, DetailContainer, Row, Text, Button } from "./style"
import { Paragraph } from "../Page"
import { Link } from "react-router-dom"

class ProductInfo extends React.Component {
  render() {
    return (
      <Content>
        {/* <Image src={liability} alt="Liability Insurance" /> */}

        <div>
          <Paragraph>
            The private liability insurance of <i>matiive</i> takes over for you
            compensation claims against third parties and defends against
            unjustified claims without further costs for you - if necessary,
            even in court. In addition, it offers you numerous important
            insurance benefits, such as:
          </Paragraph>

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
          <Link to="/data">
            <Button>Check out the options!</Button>
          </Link>
        </div>
      </Content>
    )
  }
}

export default ProductInfo
