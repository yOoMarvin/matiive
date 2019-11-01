import React from "react"

import ProductInfo from "../../components/ProductInfo"
// import LiabilityOptions from "../components/LiabilityOptions"
// import LiabilityAccordion from "../components/LiabilityAccordion"
import liability from "../../assets/liability.png"
import { Title, Page } from "./style"

class Liability extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        {/* TODO: show the modal in this page after, 10 clicks or 180 seconds on the page */}
        <Page>
          <ProductInfo
            title="Covered. For all cases."
            subtitle="Always on the safe side with the liability insurance from matiive."
            price="Starting at 3,50€ per month."
            about="Protects you when you accidentally harm a thing or person."
            info1="Up to € 50 million coverage "
            info2="Key loss included"
            info3="Worldwide protection"
            info4="Fast help with excellent support and customer service"
            image={liability}
          />
          <div>
            <Title>
              Our private liability insurance at a glance. <br />
              Excellent protection. Suitable for you.
            </Title>
            {/* <LiabilityAccordion /> */}
            {/* <LiabilityOptions ref="liability-options" /> */}
          </div>
        </Page>
      </div>
    )
  }
}

export default Liability
