import React, { useContext, useEffect } from "react"
import { Container, Button } from "./style"
import { Link } from "react-router-dom"

import TarifOption from "../TarifOption"

import liabilityBasic from "../../assets/liability-basic.png"
import liabilityComfort from "../../assets/liability-comfort.png"
import liabilityTop from "../../assets/liability-top.png"

import { AppContext } from "../../config/AppContext"

export default function LiabilityOptions() {
  const [state, setState] = useContext(AppContext)

  useEffect(() => {
    state.postDataWithState(state)
  })

  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <TarifOption
          image={liabilityBasic}
          title="Economy Class"
          subtitle="matiive basic"
          row1="Insurance Sum $5 Mio."
          row2="Loss of private keys - $20,000"
          row3="Construction work - $50,000"
          row4="Damages abroad - $50,000"
          price="$5.50"
          option="basic"
        />
        <Link to="/final">
          <Button
            onClick={() => {
              setState(state => ({
                ...state,
                choiceToSubmit: true,
                option: "basic",
              }))
            }}
          >
            Finish now
          </Button>
        </Link>
      </div>

      <div style={{ textAlign: "center" }}>
        <TarifOption
          image={liabilityComfort}
          title="Business Class"
          subtitle="matiive comfort"
          row1="Insurance Sum $15 Mio."
          row2="Loss of private keys - $30,000"
          row3="Construction work - $100,000"
          row4="Damages abroad - $100,000"
          row5="co-insured children - $15,000"
          price="$7.70"
          option="comfort"
        />
        <Link to="/final">
          <Button
            onClick={() => {
              setState(state => ({
                ...state,
                choiceToSubmit: true,
                option: "comfort",
              }))
            }}
          >
            Finish now
          </Button>
        </Link>
      </div>

      <div style={{ textAlign: "center" }}>
        <TarifOption
          image={liabilityTop}
          title="First Class"
          subtitle="matiive top"
          row1="Insurance Sum $50 Mio."
          row2="Loss of private keys - $50,000"
          row3="Construction work - $150,000"
          row4="Damages abroad - $150,000"
          row5="co-insured children - $50,000"
          row6="Foreign things - $30,000"
          price="$8.90"
          option="top"
        />
        <Link to="/final">
          <Button
            onClick={() => {
              setState(state => ({
                ...state,
                choiceToSubmit: true,
                option: "top",
              }))
            }}
          >
            Finish now
          </Button>
        </Link>
      </div>
    </Container>
  )
}
