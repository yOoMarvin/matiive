import styled from "styled-components"
import { theme } from "../theme"
import { Shadows } from "../globals"

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #727272;
  margin-top: 8px;
  padding: 5px 0px 5px;
  background-color: ${theme.bg.wash};
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const Button = styled.button`
  background-color: ${theme.brand.default};
  border-radius: 8px;
  padding: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  color: white;
  font-size: 14px;
  margin-top: 50px;
  &:hover {
    cursor: pointer;
    ${Shadows.hover}
  }

  ${Shadows.default}
`

export const Container = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Image = styled.img`
  width: 50%;
  height: auto;
`
