import React from "react"
import Modal from "react-modal"

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

class Final extends React.Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: true,
      clicks: 0,
    }

    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
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
              <h1 onClick={() => console.log("I'm sad")}>🙁</h1>
              <h1 onClick={() => console.log("I'm neutral")}>😐</h1>
              <h1 onClick={() => console.log("I'm happy")}>🙂</h1>
            </Emojis>
            <ButtonContainer>
              <Button onClick={this.closeModal}>close</Button>
              <Button onClick={() => console.log(window.location.href)}>
                Log that stuff!
              </Button>
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
            <p>
              Just let us know your email address and we'll send you everything
              new about matiive. No Spam Ever! Pinky Promise!
            </p>
            <form style={{ marginTop: "3em" }} action="/">
              <FormGroup>
                <label>Name:</label>
                <Input type="text" placeholder="John Doe" />
              </FormGroup>
              <FormGroup>
                <label>E-mail:</label>
                <Input type="text" placeholder="john@doe.com" />
              </FormGroup>
              <Button type="submit">Submit now!</Button>
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
