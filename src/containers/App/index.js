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

// ** TMP **
// export firestore data
// init analytics and firestore
let db = firebase.firestore()
// array for results
let data = []
// retrieve data and add it to array as object
db.collection("sandbox")
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      data.push({
        id: doc.id,
        nudge: doc.data().nudge,
        feedback: doc.data().feedback,
        option: doc.data().option,
        family: doc.data().family,
        gender: doc.data().gender,
        housing: doc.data().housing,
        landingToInput: doc.data().landingToInput,
        inputToChoice: doc.data().inputToChoice,
        choiceToSubmit: doc.data().choiceToSubmit,
        conversion: doc.data().conversion,
        created: doc
          .data()
          .created.toDate()
          .toJSON(),
      })
    })
  })
// in the browser: right click and copy object. Add it to the file in root folder here
console.log(data)

export default class App extends React.Component {
  constructor() {
    super()

    // set a global nudge index
    // 0 = no nudge
    // 1 = threat nudge
    this.state = {
      nudgelevel: Math.floor(Math.random() * 2 + 0),
    }

    switch (this.state.nudgelevel) {
      case 0:
        analytics.logEvent("set_nudge_0")
        break
      case 1:
        analytics.logEvent("set_nudge_1")
        break
      //update: only two cases... 0 and 1
      // case 2:
      //   analytics.logEvent("set_nudge_2")
      //   break
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
