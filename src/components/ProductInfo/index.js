import React, { useContext, useEffect } from "react"
import { CheckCircle } from "react-feather"
import { Content, DetailContainer, Row, Text, Button } from "./style"
import { Paragraph } from "../Page"
import { Link } from "react-router-dom"

// context
import { AppContext } from "../../config/AppContext"

export default function ProductInfo(props) {
  useEffect(() => {
    state.postDataWithState(state)
  })

  const [state, setState] = useContext(AppContext)

  return (
    <Content>
      {/* <Image src={liability} alt="Liability Insurance" /> */}

      <div>
        <Paragraph>
          The private liability insurance of <i>matiive</i> takes over for you
          compensation claims against third parties and defends against
          unjustified claims without further costs for you - if necessary, even
          in court. In addition, it offers you numerous important insurance
          benefits, such as:
        </Paragraph>

        <DetailContainer>
          <Row>
            <CheckCircle />
            <Text>{props.info1}</Text>
          </Row>
          <Row>
            <CheckCircle />
            <Text>{props.info2} </Text>
          </Row>
          <Row>
            <CheckCircle />
            <Text>{props.info3} </Text>
          </Row>
          <Row>
            <CheckCircle />
            <Text>{props.info4}</Text>
          </Row>
          <Row>
            <CheckCircle />
            <Text>{props.info5}</Text>
          </Row>
          <Row>
            <CheckCircle />
            <Text>{props.info6}</Text>
          </Row>
        </DetailContainer>
        <Link to="/data">
          <Button
            onClick={() => {
              setState(state => ({ ...state, landingToInput: true }))
            }}
          >
            Check out the options!
          </Button>
        </Link>
      </div>
    </Content>
  )
}
