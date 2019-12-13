import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "../Home"
import Liability from "../Liability"
import Final from "../Final"
import Disclaimer from "../Disclaimer"
import Data from "../Data"

import { ConfigProvider } from "../../config/configContext"

import firebase from "../../config/firebase"
// init analytics
let analytics = firebase.analytics()

export default class App extends React.Component {
  render() {
    return (
      <ConfigProvider>
        <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/liability">
              <Liability />
            </Route>

            <Route path="/data">
              <Data />
            </Route>

            <Route path="/final">
              <Final />
            </Route>

            <Route path="/disclaimer">
              <Disclaimer />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ConfigProvider>
    )
  }
}
