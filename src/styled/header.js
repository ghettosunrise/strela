import styled from "styled-components"
import arrR from "../images/arrowr.svg"
import logo from "../images/logo.png"
import Flex from "./flex"
// import Flex from "./flex"

export const StyledHeader = styled.header`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  display: flex;
  margin-bottom: 65px;
`

export const HeaderLogoWrap = styled(Flex)`
  /* align-items: center;
  justify-content: space-between;
  flex-direction: row; */

  a {
    width: 93px;
    height: 39px;
    background-image: url(${logo});
    background-size: 100%;
  }

  span {
    width: 48px;
    height: 23px;
    background-image: url(${arrR});
    background-size: 100%;
  }
`
