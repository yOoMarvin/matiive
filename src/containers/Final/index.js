import React from "react"
import Modal from "react-modal"
import firebase from "../../config/firebase"

import {
  ModalContainer,
  Emojis,
  ButtonContainer,
  Button,
  Title,
  Content,
  FormGroup,
  Input,
  Image,
  Left,
} from "./style"

import final from "../../assets/final.png"

// init analytics and firestore
let analytics = firebase.analytics()
let db = firebase.firestore()

class Final extends React.Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: true,
      clicks: 0,
      mail: "",
      name: "",
    }

    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleSadClick = this.handleSadClick.bind(this)
    this.handleNeutralClick = this.handleNeutralClick.bind(this)
    this.handleHappyClick = this.handleHappyClick.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleMailChange = this.handleMailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00"
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
    analytics.logEvent("modal_cancel")
  }

  // helper for processing the url and params
  processUrl(url) {
    let params = url.split("?")[1].split("&")
    let option = params[0].split("=")[1].split("-")[1]
    let nudgelevel = params[1].split("=")[1]

    let result = [option, nudgelevel]

    return result
  }
  // function for handling emoji clicks
  handleSadClick() {
    let params = this.processUrl(window.location.href)
    switch (params[0]) {
      case "basic":
        switch (params[1]) {
          case "0":
            analytics.logEvent("sad_basic_0_click")
            break
          case "1":
            analytics.logEvent("sad_basic_1_click")
            break
          case "2":
            analytics.logEvent("sad_basic_2_click")
            break
          default:
            break
        }
        break
      case "comfort":
        switch (params[1]) {
          case "0":
            analytics.logEvent("sad_comfort_0_click")
            break
          case "1":
            analytics.logEvent("sad_comfort_1_click")
            break
          case "2":
            analytics.logEvent("sad_comfort_2_click")
            break
          default:
            break
        }
        break
      case "top":
        switch (params[1]) {
          case "0":
            analytics.logEvent("sad_top_0_click")
            break
          case "1":
            analytics.logEvent("sad_top_1_click")
            break
          case "2":
            analytics.logEvent("sad_top_2_click")
            break
          default:
            break
        }
        break
      default:
        break
    }

    // post to firestore
    db.collection("activities")
      .add({
        feedback: "sad",
        option: params[0],
        nudgelevel: parseInt(params[1]),
        created: new Date(),
      })
      .then(function() {
        console.log("Document successfully written!")
      })
      .catch(function(error) {
        console.error("Error writing document: ", error)
      })

    // close modal
    this.setState({ modalIsOpen: false })
  }

  handleNeutralClick() {
    let params = this.processUrl(window.location.href)
    switch (params[0]) {
      case "basic":
        switch (params[1]) {
          case "0":
            analytics.logEvent("neutral_basic_0_click")
            break
          case "1":
            analytics.logEvent("neutral_basic_1_click")
            break
          case "2":
            analytics.logEvent("neutral_basic_2_click")
            break
          default:
            break
        }
        break
      case "comfort":
        switch (params[1]) {
          case "0":
            analytics.logEvent("neutral_comfort_0_click")
            break
          case "1":
            analytics.logEvent("neutral_comfort_1_click")
            break
          case "2":
            analytics.logEvent("neutral_comfort_2_click")
            break
          default:
            break
        }
        break
      case "top":
        switch (params[1]) {
          case "0":
            analytics.logEvent("neutral_top_0_click")
            break
          case "1":
            analytics.logEvent("neutral_top_1_click")
            break
          case "2":
            analytics.logEvent("neutral_top_2_click")
            break
          default:
            break
        }
        break
      default:
        break
    }
    // post to firestore
    db.collection("activities")
      .add({
        feedback: "neutral",
        option: params[0],
        nudgelevel: parseInt(params[1]),
        created: new Date(),
      })
      .then(function() {
        console.log("Document successfully written!")
      })
      .catch(function(error) {
        console.error("Error writing document: ", error)
      })

    // close modal
    this.setState({ modalIsOpen: false })
  }

  handleHappyClick() {
    let params = this.processUrl(window.location.href)
    switch (params[0]) {
      case "basic":
        switch (params[1]) {
          case "0":
            analytics.logEvent("happy_basic_0_click")
            break
          case "1":
            analytics.logEvent("happy_basic_1_click")
            break
          case "2":
            analytics.logEvent("happy_basic_2_click")
            break
          default:
            break
        }
        break
      case "comfort":
        switch (params[1]) {
          case "0":
            analytics.logEvent("happy_comfort_0_click")
            break
          case "1":
            analytics.logEvent("happy_comfort_1_click")
            break
          case "2":
            analytics.logEvent("happy_comfort_2_click")
            break
          default:
            break
        }
        break
      case "top":
        switch (params[1]) {
          case "0":
            analytics.logEvent("happy_top_0_click")
            break
          case "1":
            analytics.logEvent("happy_top_1_click")
            break
          case "2":
            analytics.logEvent("happy_top_2_click")
            break
          default:
            break
        }
        break
      default:
        break
    }
    // post to firestore
    db.collection("activities")
      .add({
        feedback: "happy",
        option: params[0],
        nudgelevel: parseInt(params[1]),
        created: new Date(),
      })
      .then(function() {
        console.log("Document successfully written!")
      })
      .catch(function(error) {
        console.error("Error writing document: ", error)
      })

    // close modal
    this.setState({ modalIsOpen: false })
  }

  handleMailChange(e) {
    this.setState({ mail: e.target.value })
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }
  handleSubmit() {
    // fire analytics event
    analytics.logEvent("submit_click")

    // post to firestore
    db.collection("submits")
      .add({
        name: this.state.name,
        mail: this.state.mail,
        created: new Date(),
      })
      .then(function() {
        console.log("Document successfully written!")
      })
      .catch(function(error) {
        console.error("Error writing document: ", error)
      })
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <ModalContainer>
            <h2>How would you rate your experience so far?</h2>
            <Emojis>
              <h1 onClick={this.handleSadClick}>🙁</h1>
              <h1 onClick={this.handleNeutralClick}>😐</h1>
              <h1 onClick={this.handleHappyClick}>🙂</h1>
            </Emojis>
            <ButtonContainer>
              <Button onClick={this.closeModal}>close</Button>
            </ButtonContainer>
          </ModalContainer>
        </Modal>
        <Title>Thank you for your interest</Title>
        <Content>
          <Left>
            <p>
              Since we are not yet officially launched with our matiive
              insurance, everything is still a little in its infancy. We would
              like to thank you for your trust and let you know as soon as
              something new happens.
            </p>
            {/* <p>
              Just let us know your email address and we'll send you everything
              new about matiive. No Spam Ever! Pinky Promise!
            </p> */}
            <form
              style={{ marginTop: "3em" }}
              action="https://forms.gle/SFcc7wi8HL3cXkSFA"
            >
              {/* <FormGroup>
                <label>Name:</label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </FormGroup>
              <FormGroup>
                <label>E-mail:</label>
                <Input
                  type="text"
                  placeholder="john@doe.com"
                  value={this.state.mail}
                  onChange={this.handleMailChange}
                />
              </FormGroup> */}
              <Button type="submit" onClick={this.handleSubmit}>
                Continue to survey!
              </Button>
            </form>
          </Left>
          <div>
            <Image src={final} alt="confetti" />
          </div>
        </Content>
      </div>
    )
  }
}
export default Final
