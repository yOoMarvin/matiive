import React from "react"

import LiabilityOptions from "../../components/LiabilityOptions"
import ThreatNudge from "../../components/ThreatNudge"
import Page, {
  SectionHeading,
  LargeHeading,
  Heading,
} from "../../components/Page"

class Liability extends React.Component {
  render() {
    return (
      <Page width="90vw">
        <SectionHeading>
          <LargeHeading>
            Private Liability Insurane - Tariff Options
          </LargeHeading>
          <Heading>Based on your data, those are the best options</Heading>
        </SectionHeading>

        <div style={{ height: "32px" }} />
        {/* nudge rendering based on nudgelevel (from parent state) */}
        <div style={{ width: "100%", textAlign: "center" }}>
          {this.props.nudgelevel === 1 ? <ThreatNudge /> : null}
        </div>
        <LiabilityOptions nudgelevel={this.props.nudgelevel} />
      </Page>
    )
  }
}

export default Liability
