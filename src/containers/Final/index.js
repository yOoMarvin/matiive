import React from "react"
import Modal from "react-modal"
import firebase from "../../config/firebase"

import {
  ModalContainer,
  Emojis,
  ButtonContainer,
  Button,
  EmojiContainer,
} from "./style"

import Page, { LargeHeading, SectionHeading } from "../../components/Page"
import FinalForm from "../../components/FinalForm"

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
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          <ModalContainer>
            <LargeHeading>
              How would you rate your experience so far?
            </LargeHeading>
            <Emojis>
              <EmojiContainer>
                <h1 onClick={this.handleSadClick}>😭</h1>
                <h3>1</h3>
              </EmojiContainer>

              <EmojiContainer>
                <h1>🙁</h1>
                <h3>2</h3>
              </EmojiContainer>

              <EmojiContainer>
                <h1>😕</h1>
                <h3>3</h3>
              </EmojiContainer>

              <EmojiContainer>
                <h1>😐</h1>
                <h3>4</h3>
              </EmojiContainer>

              <EmojiContainer>
                <h1>🙂</h1>
                <h3>5</h3>
              </EmojiContainer>

              <EmojiContainer>
                <h1>😊</h1>
                <h3>6</h3>
              </EmojiContainer>

              <EmojiContainer>
                <h1>😍</h1>
                <h3>7</h3>
              </EmojiContainer>
            </Emojis>
            <ButtonContainer>
              <Button onClick={this.closeModal}>close</Button>
            </ButtonContainer>
          </ModalContainer>
        </Modal>

        <Page>
          <SectionHeading>
            <LargeHeading>Thank you for your interest</LargeHeading>
          </SectionHeading>
          <FinalForm />
        </Page>
      </div>
    )
  }
}
export default Final
