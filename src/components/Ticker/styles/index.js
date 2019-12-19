import styled from "styled-components"
import Flex from "../../../styled/flex"
import arrw from "../../../images/arrw.svg"

export const MyTicker = styled(Flex)`
  height: 58px;
  width: 100%;
  background: #2403a6;

  a {
    color: #ffffff;
    margin-right: 70px;

    position: relative;
    &::after {
      width: 26px;
      height: 13px;
      content: "";
      background-image: url(${arrw});
      position: absolute;
      right: -50px;
      background-size: 100%;
      top: 7px;
    }
  }
`
const TickerText = styled.a`
  color: white;
  size: 16px;
  font-weight: 500;
  white-space: nowrap;
  padding: 0px 38px;
`
