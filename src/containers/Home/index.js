import React from "react"
import CookieConsent from "react-cookie-consent"

import firebase from "../../config/firebase"
import Page, {
  SectionHeading,
  LargeHeading,
  Subheading,
} from "../../components/Page"
import Reasons from "../../components/Reasons"

// init analytics
let analytics = firebase.analytics()

class Index extends React.Component {
  render() {
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
          By using this website you agree that cookies are used to increase user
          experience <span role="img">🍪</span>
          <a href="/disclaimer">Find out more.</a>
        </CookieConsent>
        <SectionHeading>
          <LargeHeading>Insurance as you imagine it</LargeHeading>
          <Subheading>
            You wonder why insurance must be so complicated? <br />
            We too! Matiive is your first fully digital insurance that really
            makes your life easier!
          </Subheading>
        </SectionHeading>

        <SectionHeading>
          <Reasons />
        </SectionHeading>
      </Page>
    )
  }
}

export default Index
