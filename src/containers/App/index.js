import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "../Home"
import Liability from "../Liability"
import Final from "../Final"
import Disclaimer from "../Disclaimer"
import Data from "../Data"

import firebase from "../../config/firebase"
// init analytics
let analytics = firebase.analytics()

export default class App extends React.Component {
  constructor() {
    super()

    // set a global nudge index
    // 0 = no nudge
    // 1 = threat nudge
    this.state = {
      nudge: Math.floor(Math.random() * 2 + 0),
    }

    switch (this.state.nudge) {
      case 0:
        analytics.logEvent("set_nudge_0")
        break
      case 1:
        analytics.logEvent("set_nudge_1")
        break
      default:
        break
    }
  }

  render() {
    console.log(firebase.firebaseConfig)
    return (
      <Router>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/liability">
            <Liability nudge={this.state.nudge} />
          </Route>

          <Route path="/data">
            <Data />
          </Route>

          <Route path="/final">
            <Final nudge={this.state.nudge} />
          </Route>

          <Route path="/disclaimer">
            <Disclaimer nudge={this.state.nudge} />
          </Route>

          <Route path="/">
            <Home nudge={this.state.nudge} />
          </Route>
        </Switch>
      </Router>
    )
  }
}
