import styled, { css } from "styled-components"
import Flex from "../../../styled/flex"

const small = css`
  width: 23.6%;

  @media only screen and (max-width: 1150px) {
    width: 48.8%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const mediumSmall = css`
  width: 32.3%;

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
      : props.size === "mediumSmall"
      ? mediumSmall
      : props.size === "big"
      ? big
      : null}
`

export const Special = styled(Flex)`
  width: 100%;

  background-color: #000;
  position: relative;
  padding: 18px 18px 40px 14px;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    padding: 15px 15px 30px;

    img {
      margin-bottom: 20px;
    }
  }

  &::before {
    content: "";
    width: 100%;
    height: 110px;
    background: #f3f2f1;
    position: absolute;
    left: -120px;
    bottom: -60px;
    transform: rotate(45deg);

    @media only screen and (max-width: 1150px) {
      bottom: -150px;
    }
  }

  &::after {
    content: "";
    width: 100%;
    height: 110px;
    background: #f3f2f1;
    position: absolute;
    right: -120px;
    top: -60px;
    transform: rotate(45deg);

    @media only screen and (max-width: 1150px) {
      top: -150px;
    }
  }
`

export const Title = styled.h4`
  font-family: Neue Machina;
  font-size: ${props => (props.extraLarge ? "48px" : "24px")};
  line-height: ${props => (props.extraLarge ? "48px" : "28px")};
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

export const SpecialTitle = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.07em;
  color: #ffffff;
  padding-left: 40px;
`

export const SpecialDate = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.07em;
  color: #ffffff;
  padding-left: 40%;
`
