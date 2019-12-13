import styled from "styled-components"
import { theme } from "../../components/theme"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
  background-color: ${theme.bg.wash};

  @media (max-width: 968px) {
    padding: 8px 16px;
  }
`
export const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${theme.text.default};
`
export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const StyledLink = styled.span`
  color: ${theme.text.tertiary};
  margin-left: 32px;
  margin-right: 32px;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    color: ${theme.text.default};
  }
`
export const Blue = styled.span`
  color: ${theme.brand.default};
`
