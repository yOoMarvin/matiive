import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom"

import { Header, Logo, Link, Links, Container, Blue } from "./style"

export default function App() {
  return (
    <Router>
      <Container>
        <Header>
          <Logo>
            <Blue>matiive</Blue> insurance.
          </Logo>
          <Links>
            <NavLink exact to="/liability">
              <Link>Private Liability</Link>
            </NavLink>
            <NavLink exact to="/">
              <Link>Home</Link>
            </NavLink>
          </Links>
        </Header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/liability">
            <h1>This is matiive</h1>
          </Route>
          <Route path="/">
            <h1>This is matiive</h1>
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}
