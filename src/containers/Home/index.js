import React from "react"
import CookieConsent from "react-cookie-consent"

import Page, {
  SectionHeading,
  LargeHeading,
  Subheading,
  Heading,
  Paragraph,
  LargeSubheading,
} from "../../components/Page"
import Reasons from "../../components/Reasons"
import ProductInfo from "../../components/ProductInfo"

import Consumer from "../../config/configContext"
import { Button } from "../../components/Reasons/style"

class Index extends React.Component {
  state = { count: 4 }
  render() {
    return (
      <Consumer>
        {context => {
          return (
            <Page>
              <CookieConsent
                location="bottom"
                buttonText="Okay"
                buttonStyle={{
                  backgroundColor: "#0C81F6",
                  color: "white",
                  fontSize: "14px",
                  borderRadius: "3px",
                }}
              >
                By using this website you agree that cookies are used to
                increase user experience <span role="img">🍪</span>
                <a href="/disclaimer">Find out more.</a>
              </CookieConsent>

              <SectionHeading>
                <LargeHeading>Let's check the context</LargeHeading>
                <Heading>{context.count}</Heading>
              </SectionHeading>

              <SectionHeading>
                <LargeHeading>Insurance as you imagine it</LargeHeading>
                <Subheading>
                  You wonder why insurance must be so complicated? <br />
                  We too! Matiive is your first fully digital insurance that
                  really makes your life easier!
                </Subheading>
              </SectionHeading>

              <div style={{ height: "32px" }} />

              <Reasons />

              <SectionHeading>
                <LargeHeading>Covered. For all cases</LargeHeading>
                <Heading>Starting at $5.50 per month.</Heading>
                <Subheading>
                  Always on the safe side with the private liability insurance
                  from matiive.
                </Subheading>

                <div style={{ height: "32px" }} />

                <Heading>Why is a private liability insurance useful?</Heading>

                <ProductInfo
                  info1="Up to $50 million coverage"
                  info2="Key loss included"
                  info3="Property damage to buildings"
                  info4="Additional damages to financial assets"
                  info5="Worldwide protection"
                  info6="Fast help with excellent support and customer service"
                />
              </SectionHeading>
            </Page>
          )
        }}
      </Consumer>
    )
  }
}

export default Index
