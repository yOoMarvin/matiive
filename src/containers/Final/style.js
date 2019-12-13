import styled from "styled-components"

export const Button = styled.button`
  background-color: #0c81f6;
  border-radius: 8px;
  padding: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  color: white;
  font-size: 14px;
  margin-top: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    cursor: pointer;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
export const Emojis = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap-around;
  h1 {
    padding: 8px;
    font-size: 4.5em;
    &:hover {
      cursor: pointer;
    }
  }
`
export const EmojiContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-aling: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
