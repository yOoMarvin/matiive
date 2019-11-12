import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom"

import {
  Header,
  Logo,
  StyledLink,
  Links,
  Container,
  Blue,
  Footer,
} from "./style"
import Home from "../Home"
import Liability from "../Liability"
import Final from "../Final"
import Disclaimer from "../Disclaimer"

import firebase from "../../config/firebase"
// init analytics
let analytics = firebase.analytics()

export default class App extends React.Component {
  constructor() {
    super()

    // set a global nudge index
    // 0 = no nudge
    // 1 = testimonial nudge
    // 2 = accordian nudge
    this.state = {
      nudgelevel: Math.floor(Math.random() * 3 + 0),
    }

    switch (this.state.nudgelevel) {
      case 0:
        analytics.logEvent("set_nudge_0")
        break
      case 1:
        analytics.logEvent("set_nudge_1")
        break
      case 2:
        analytics.logEvent("set_nudge_2")
        break
      default:
        break
    }
  }

  render() {
    console.log(firebase.firebaseConfig)
    return (
      <Router>
        <Container>
          <Header>
            <Link to="/">
              <Logo onClick={() => analytics.logEvent("home_click")}>
                <Blue>matiive</Blue> insurance.
              </Logo>
            </Link>

            <Links>
              <NavLink exact to="/liability">
                <StyledLink
                  onClick={() => analytics.logEvent("header_liability_click")}
                >
                  Private Liability
                </StyledLink>
              </NavLink>
            </Links>
          </Header>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/liability">
              <Liability nudgelevel={this.state.nudgelevel} />
            </Route>

            <Route path="/final">
              <Final nudgelevel={this.state.nudgelevel} />
            </Route>

            <Route path="/disclaimer">
              <Disclaimer nudgelevel={this.state.nudgelevel} />
            </Route>

            <Route path="/">
              <Home nudgelevel={this.state.nudgelevel} />
            </Route>
          </Switch>

          <Footer>
            <span>Copyright 2019 </span>
            <Link
              to="/disclaimer"
              onClick={() => analytics.logEvent("disclaimer_click")}
            >
              Disclaimer
            </Link>
          </Footer>
        </Container>
      </Router>
    )
  }
}
