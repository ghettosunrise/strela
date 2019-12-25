import styled from "styled-components"
import Flex from "../../../styled/flex"

export const TopNav = styled(Flex)`
  a,
  span {
    font-family: Formular;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    color: #000000;
    margin-bottom: ${props => props.space + "px"};

    :last-child {
      margin-bottom: ${props => (props.column ? +props.space + 30 + "px" : 0)};
    }
  }
`
export const NavWrap = styled(Flex)`
  max-width: ${props => (props.agency ? "507px" : "270px")};
  width: 100%;
`
