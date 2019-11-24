import styled from "styled-components"
import { Shadows } from "../globals"
import { theme } from "../theme"

export const Container = styled.div`
  width: 100%;
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: nowrap;
`

export const Title = styled.h1`
  font-size: 3em;
  text-align: center;
`
export const SubTitle = styled.h3`
  text-align: center;
  margin-bottom: 80px;
`
export const Fat = styled.p`
  font-weight: bold;
`
export const Info = styled.div`
  width: 500px;
  @media (max-width: 850px) {
    width: auto;
  }
`
export const Left = styled.div``
export const Right = styled.div``
export const Image = styled.img`
  @media (max-width: 1050px) {
    display: none;
  }
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
