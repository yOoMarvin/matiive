import styled from "styled-components"
import { theme } from "../../components/theme"

export const Container = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 120px;
  margin-right: 16px;
  color: ${theme.text.tertiary};

  font-size: 14px;

  padding-bottom: 16px;
  a {
    color: ${theme.text.default};
    margin-left: 4px;
  }
`
