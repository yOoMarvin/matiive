import styled from "styled-components"
import { Shadows } from "../globals"
import { theme } from "../theme"

export const Container = styled.div`
  width: 100%;
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
`

export const Image = styled.img`
  width: 50%;
  height: auto;
`
export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 30px;
`
export const Row = styled.div`
  display: flex;
  flex-direct: row;
  align-items: center;
`
export const Text = styled.p`
  margin-left: 20px;
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
