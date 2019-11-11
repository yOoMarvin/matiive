import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom"

import { Header, Logo, StyledLink, Links, Container, Blue } from "./style"
import Home from "../Home"
import Liability from "../Liability"
import Final from "../Final"

import firebase from "../../config/firebase"

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
  }

  render() {
    console.log(firebase.firebaseConfig)
    return (
      <Router>
        <Container>
          <Header>
            <Link to="/">
              <Logo>
                <Blue>matiive</Blue> insurance.
              </Logo>
            </Link>

            <Links>
              <NavLink exact to="/liability">
                <StyledLink>Private Liability</StyledLink>
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

            <Route path="/">
              <Home nudgelevel={this.state.nudgelevel} />
            </Route>
          </Switch>
        </Container>
      </Router>
    )
  }
}
