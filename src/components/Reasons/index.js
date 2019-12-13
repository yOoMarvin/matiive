import React from "react"
import {
  Content,
  DetailContainer,
  DetailTextContainer,
  DetailText,
  DetailTitle,
  Image,
  Button,
} from "./style"
import titleimage from "../../assets/titleimage.png"
import { Link } from "react-router-dom"
import { Check, Briefcase, Clock, DollarSign } from "react-feather"

export default function Reasons() {
  return (
    <div>
      <Content>
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
          <Link to="/liability">
            <Button>Discover now!</Button>
          </Link>
        </div>

        <Image src={titleimage} alt="Title" />
      </Content>
    </div>
  )
}
