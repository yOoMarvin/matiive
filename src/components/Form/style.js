import styled from "styled-components"
import { theme } from "../theme"
import { Shadows } from "../globals"

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
`

export const Input = styled.input`
  margin-right: 8px;
  margin-left: 8px;
  height: 18px;
  width: 18px;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
