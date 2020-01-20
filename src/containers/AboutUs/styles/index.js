import styled from "styled-components"
import decor from "../../../images/blockpic.png"
import Flex from "../../../styled/flex"

export const Title = styled.h1`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 96px;
  letter-spacing: -0.07em;
  color: #000000;
  margin-bottom: 60px;
  width: 70%;
  font-weight: 300;

  @media only screen and (max-width: 1150px) {
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 40px;
    width: 60%;
  }
`

export const Descritpion = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  /* or 117% */
  width: 49%;
  letter-spacing: -0.07em;
  margin-bottom: 110px;
  color: #000000;
`

export const DecorItem = styled.div`
  width: 321px;
  height: 373px;
  background-size: 100%;
  background-image: url(${decor});
  position: absolute;
  top: 80px;
  right: 0;

  @media only screen and (max-width: 1150px) {
    top: 0px;
  }
`
export const Hero = styled(Flex)`
  max-width: 944px;
  width: 100%;
  flex-direction: row;
  margin-bottom: 140px;

  &:last-child {
    margin-bottom: 140px;
  }

  img {
    max-width: 320px;
    margin-right: 19px;
  }

  @media only screen and (max-width: 1150px) {
    margin-right: 0;
    margin-bottom: 60px;
  }
`
export const HeroTitle = styled.h2`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.07em;
  color: #000000;
  margin-bottom: 16px;
`
export const HeroSubtitle = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.07em;
  color: #000000;
  margin-bottom: 30px;
`

export const HeroDescription = styled.p`
  font-family: Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.03em;
  color: #000000;
  opacity: 0.7;
`
export const LinkWrap = styled.div`
  margin-right: 56px;

  &:last-child {
    margin-right: 0;
  }

  p {
    font-family: Formular;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #000000;
    opacity: 0.5;
    margin-bottom: 15px;
  }

  a {
    font-family: Neue Machina;
    font-style: normal;
    font-weight: 900;
    font-size: 13px;
    line-height: 13px;
    letter-spacing: 0.06em;
    position: relative;
    text-transform: uppercase;
    color: #000000;
    margin-right: 20px;
    overflow: hidden;
    transition: all 0.4s ease;

    &::before {
      content: "";
      width: 100%;
      position: absolute;
      right: 0;
      left: auto;
      bottom: 0;
      height: 1px;
      background: #000;
      transition: width 0.4s cubic-bezier(0.7, 0, 0.5, 1);
    }

    &::after {
      content: "";
      width: 0%;
      position: absolute;
      bottom: 0px;
      left: 0;
      height: 1px;
      background: #000;
      transition: width 0.4s cubic-bezier(0.7, 0, 0.5, 1);
    }

    &:hover {
      &::before {
        width: 0;
      }

      &::after {
        transition-delay: 0.3s;
        width: 100%;
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
`
export const BottomTxt1 = styled.h2`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  max-width: 452px;
  width: 100%;
  letter-spacing: -0.07em;
  color: #000000;
  margin-bottom: 60px;
`
export const BottomTxt2 = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.07em;
  color: #000000;
  max-width: 488px;
  width: 100%;
  opacity: 0.7;
`
