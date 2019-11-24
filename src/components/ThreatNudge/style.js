import styled from "styled-components"
import { theme } from "../theme"

export const Row = styled.div`
  display: flex;
  flex-direaction: row;
  align-items: center;
`
export const Container = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${theme.brand.darkblue};
  border-radius: 30px;
  padding: 1em;
  text-align: center;
  margin-bottom: 2em;
  margin-left: 2em;
  margin-right: 2em;
  text-align: justify;

  color: white;
  width: 50vw;
  left: 50%;

  border: 8px solid ${theme.brand.darkblue};
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const TextContainer = styled.div``

export const Image = styled.img`
  width: 100% !important;
  height: auto;
  border-radius: 13px;
  margin-right: 16px;

  @media (max-width: 1050px) {
    display: none;
  }
`
