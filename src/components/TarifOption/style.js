import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 3px;
  border: 2px solid #c4c4c4;
  padding: 1em 1em 1.5em 1em;
  width: 22em;
  margin-bottom: 3em;

  @media (max-width: 440px) {
    width: 15em;
  }
`
export const Title = styled.h3`
  line-height: 0;
  padding-bottom: 0;
  margin-bottom: 0;
`
export const Description = styled.div`
  margin-left: 1em;
`
export const TopRow = styled.div``
export const LightRow = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
export const Price = styled.div`
  margin-top: 1em;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  text-align: center;
  bottom: 0;
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
`
