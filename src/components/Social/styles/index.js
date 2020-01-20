import styled from "styled-components"
import Flex from "../../../styled/flex"

export const SocialTop = styled(Flex)`
  max-width: 97px;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  transition: opacity 0.3s ease;
  opacity: ${props => {
    return props.isMoved === false && props.isTop === true
      ? 0
      : props.isMoved === true && props.isBottom === true
      ? 0
      : 1
  }};

  a {
    font-family: Neue Machina;
    font-size: 13px;
    line-height: 13px;
    letter-spacing: 0.06em;
    text-decoration-line: underline;
    text-transform: uppercase;
    font-weight: 900;
    color: #000000;
  }
`
