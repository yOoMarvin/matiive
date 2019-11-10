import styled from "styled-components"

export const Content = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const Left = styled.div`
  width: 30em;
  margin-right: 32px;
  @media (max-width: 850px) {
    width: 20em;
    margin-right: auto;
  }
`
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 20em;
  @media (max-width: 850px) {
    width: 15em;
  }
`
export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #727272;
  margin-top: 8px;
  padding: 5px 0px 5px;
`
export const Title = styled.h1`
  font-size: 3em;
  text-align: center;
`
export const Image = styled.img`
  @media (max-width: 850px) {
    display: none;
  }
`
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
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
