import React from "react"
import CookieConsent from "react-cookie-consent"
import { Check, Briefcase, Clock, DollarSign } from "react-feather"
import { Link } from "react-router-dom"
import {
  Content,
  Title,
  Subtitle,
  DetailContainer,
  DetailTextContainer,
  DetailText,
  DetailTitle,
  Image,
  Button,
} from "./style"
import titleimage from "../../assets/titleimage.png"
import firebase from "../../config/firebase"

// init analytics
let analytics = firebase.analytics()

class Index extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
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
        <Title>Insurance as you imagine it</Title>
        <Subtitle>
          You wonder why insurance must be so complicated? <br />
          We too! Matiive is your first fully digital insurance that really{" "}
          <br />
          makes your life easier!
        </Subtitle>
        <Content>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <div>
                <DetailContainer>
                  <Check />
                  <DetailTextContainer>
                    <DetailTitle>Excellent coverage</DetailTitle>
                    <DetailText>Outstanding rated tarif options</DetailText>
                  </DetailTextContainer>
                </DetailContainer>

                <DetailContainer>
                  <Briefcase />
                  <DetailTextContainer>
                    <DetailTitle>High savings potential</DetailTitle>
                    <DetailText>Cheap fees</DetailText>
                  </DetailTextContainer>
                </DetailContainer>
              </div>
              <div>
                <DetailContainer>
                  <Clock />
                  <DetailTextContainer>
                    <DetailTitle>Maximum time savings</DetailTitle>
                    <DetailText>100% digital services</DetailText>
                  </DetailTextContainer>
                </DetailContainer>
                <DetailContainer>
                  <DollarSign />
                  <DetailTextContainer>
                    <DetailTitle>Stable fees</DetailTitle>
                    <DetailText>Future proof calculation</DetailText>
                  </DetailTextContainer>
                </DetailContainer>
              </div>
            </div>
            <Link to="/liability">
              <Button onClick={() => analytics.logEvent("discover_more_click")}>
                Discover now!
              </Button>
            </Link>
          </div>
          <Image src={titleimage} alt="Title" />
        </Content>
      </div>
    )
  }
}

export default Index
