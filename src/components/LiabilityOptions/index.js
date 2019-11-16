import React from "react"
import { Container } from "./style"
import TarifOption from "../TarifOption"

import liabilityBasic from "../../assets/liability-basic.png"
import liabilityComfort from "../../assets/liability-comfort.png"
import liabilityTop from "../../assets/liability-top.png"

class LiabilityOptions extends React.Component {
  render() {
    return (
      <Container>
        <TarifOption
          image={liabilityBasic}
          title="Economy Class"
          subtitle="matiive basic"
          row1="Insurance Sum $5 Mio."
          row2="Loss of private keys - $20,000"
          row3="Construction work - $50,000"
          row4="Deposit payment abroad - $50,000"
          price="$3.50"
          linkparameter={
            "option=liability-basic&nudge=" + this.props.nudgelevel
          }
          nudgelevel={this.props.nudgelevel}
          option="basic"
        />
        <TarifOption
          image={liabilityComfort}
          title="Business Class"
          subtitle="matiive comfort"
          row1="Insurance Sum $15 Mio."
          row2="Loss of private keys - $30,000"
          row3="Construction work - $100,000"
          row4="Deposit payment abroad - $100,000"
          row5="co-insured children - $15,000"
          price="$4.70"
          linkparameter={
            "option=liability-comfort&nudge=" + this.props.nudgelevel
          }
          nudgelevel={this.props.nudgelevel}
          option="comfort"
        />
        <TarifOption
          image={liabilityTop}
          title="First Class"
          subtitle="matiive top"
          row1="Insurance Sum $50 Mio."
          row2="Loss of private keys - $50,000"
          row3="Construction work - $150,000"
          row4="Deposit payment abroad - $150,000"
          row5="co-insured children - $50,000"
          row6="Damage to foreign things - $30,000"
          price="$6.20"
          linkparameter={"option=liability-top&nudge=" + this.props.nudgelevel}
          nudgelevel={this.props.nudgelevel}
          option="top"
        />
      </Container>
    )
  }
}

export default LiabilityOptions
