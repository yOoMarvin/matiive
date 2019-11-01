import styled from "styled-components"
import { Shadows } from "../../components/globals"
import { theme } from "../../components/theme"

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
`
export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
`
export const Subtitle = styled.p`
  font-size: 18px;
  text-align: center;
`
export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
  margin-top: 32px;
  margin-right: 24px;
`
export const DetailTextContainer = styled.div`
  margin-left: 8px;
`
export const DetailTitle = styled.p`
  font-size: 14px;
  color: #3c414b;
  font-weight: bold;
  line-height: 0px;
`
export const DetailText = styled.p`
  font-size: 12px;
  line-height: 8px;
`

export const Image = styled.img`
  @media (max-width: 850px) {
    display: none;
  }
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
