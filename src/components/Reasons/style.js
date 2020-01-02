import styled from "styled-components"
import { Shadows } from "../../components/globals"
import { theme } from "../../components/theme"

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  flex-shrink: 3;
`
export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 32px;
`
export const DetailTextContainer = styled.div`
  margin-left: 8px;
`
export const DetailTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
`
export const DetailText = styled.p`
  font-size: 12px;
  color: ${theme.text.tertiary};
`

export const Image = styled.img`
  width: 50%;
  height: auto;
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
