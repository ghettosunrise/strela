import styled from "styled-components"
import Nav from "../../../Nav"
import Flex from "../../../../../styled/flex"

export const SecondNav = styled(Nav)`
  flex-direction: column;
  display: flex;
`
export const MainScreen1 = styled(Flex)`
  width: 100%;
  flex-direction: row;

  h1 {
    font-family: Neue Machina;
    font-style: normal;
    font-weight: normal;
    font-size: 96px;
    line-height: 96px;
    max-width: 836px;
    letter-spacing: -0.07em;

    color: #000000;
  }

  nav {
    background: red;
  }
`
