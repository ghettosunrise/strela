import styled, { css } from "styled-components"
import Flex from "../../../styled/flex"

const small = css`
  width: 23.6%;

  @media (max-width: 1150px) {
    width: 48.8%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const medium = css`
  width: 48.8%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const big = css`
  width: 74%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

export const StyledCase = styled(Flex)`
  margin-bottom: 80px;

  .case__link {
    position: relative;
    transition: all 0.3s ease;
    overflow: hidden;
  }

  &:hover {
    .case__link {
      &::before {
        bottom: 0;
      }
    }
  }

  @media (max-width: 1150px) {
    margin-bottom: 60px;
  }

  ${props =>
    props.size === "small"
      ? small
      : props.size === "medium"
      ? medium
      : props.size === "big"
      ? big
      : null};
`

export const CaseLabel = styled.p`
  font-family: Neue Machina;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.07em;
  margin-bottom: 10px;
`

export const CaseSublabel = styled.p`
  font-family: Neue Machina;
  font-size: 14px;
  line-height: 14px;
  /* or 100% */

  letter-spacing: 0.01em;
  text-transform: uppercase;
`
export const CaseDescription = styled.p`
  font-family: Formular;
  font-size: 18px;
  line-height: 24px;
  margin-left: 20px;
  flex-grow: 1;
  cursor: default;
  /* or 133% */

  letter-spacing: -0.02em;

  color: #000000;

  opacity: 0.7;
`
