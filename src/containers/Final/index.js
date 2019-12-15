import React, { useState, useContext, useEffect } from "react"
import Modal from "react-modal"

import {
  ModalContainer,
  Emojis,
  ButtonContainer,
  Button,
  EmojiContainer,
} from "./style"

import Page, { LargeHeading, SectionHeading } from "../../components/Page"
import FinalForm from "../../components/FinalForm"

import { AppContext } from "../../config/AppContext"

export default function Final(props) {
  const [state, setState] = useContext(AppContext)
  const [modalIsOpen, setModal] = useState(true)

  useEffect(() => {
    state.postDataWithState(state)
  })

  function openModal() {
    setModal(true)
  }

  function closeModal() {
    setModal(false)
  }

  function emojiClick(value) {
    setState(state => ({ ...state, feedback: value }))
    closeModal()
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
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
              <h1 onClick={() => emojiClick(1)}>😭</h1>
              <h3>1</h3>
            </EmojiContainer>

            <EmojiContainer>
              <h1 onClick={() => emojiClick(2)}>🙁</h1>
              <h3>2</h3>
            </EmojiContainer>

            <EmojiContainer>
              <h1 onClick={() => emojiClick(3)}>😕</h1>
              <h3>3</h3>
            </EmojiContainer>

            <EmojiContainer>
              <h1 onClick={() => emojiClick(4)}>😐</h1>
              <h3>4</h3>
            </EmojiContainer>

            <EmojiContainer>
              <h1 onClick={() => emojiClick(5)}>🙂</h1>
              <h3>5</h3>
            </EmojiContainer>

            <EmojiContainer>
              <h1 onClick={() => emojiClick(6)}>😊</h1>
              <h3>6</h3>
            </EmojiContainer>

            <EmojiContainer>
              <h1 onClick={() => emojiClick(7)}>😍</h1>
              <h3>7</h3>
            </EmojiContainer>
          </Emojis>
          <ButtonContainer>
            <Button onClick={closeModal}>close</Button>
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
