import styled, { css } from "styled-components"
import Flex from "../../../styled/flex"

const small = css`
  width: 23.6%;
`

const medium = css`
  width: 48.8%;
`

const big = css`
  width: 100%;
  flex-grow: 1;
`

export const MyNews = styled(Flex)`
  margin-bottom: 60px;
  ${props =>
    props.size === "small"
      ? small
      : props.size === "medium"
      ? medium
      : props.size === "big"
      ? big
      : null}
`

export const Title = styled.h4`
  font-family: Neue Machina;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.07em;
  margin-bottom: 10px;
  color: #000000;
  font-weight: normal;
`
export const Description = styled.p`
  font-family: Formular;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.7;
  margin-bottom: 40px;
`

export const Date = styled.p`
  font-family: Formular;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #000000;
  opacity: 0.5;
`
