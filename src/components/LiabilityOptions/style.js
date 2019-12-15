import styled from "styled-components"
import { theme } from "../theme"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  padding: 1em;
  width: 100%;
`
export const Nudge = styled.div`
  display: flex;
  flex-direction: column;
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
  margin: 1em 1em 0em 1em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    cursor: pointer;
  }
  margin-bottom: 64px;
`
