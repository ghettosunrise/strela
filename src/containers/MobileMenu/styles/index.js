import styled from "styled-components"
import Flex from "../../../styled/flex"
import tg from "../../../images/tg.svg"
import fb from "../../../images/fb.svg"
import mail from "../../../images/mail.svg"

export const MobileWrap = styled(Flex)`
  width: 100%;
  height: 100vh;
  background-color: #f3f2f1;
  position: fixed;
  right: ${props => (props.isClosedMobile === true ? "-100%" : 0)};
  top: 0;
  z-index: 5;
  padding-top: 137px;
  padding: 137px 35px 6.2vh;
  align-items: center;
  transition: right 0.4s ease;

  @media only screen and (max-width: 768px) {
    align-items: flex-start;
  }
`

export const Title = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.07em;
  color: #000000;
  margin-bottom: 2.6vh;
`
export const SubTitle = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.07em;
  margin-bottom: 4.8vh;
`

export const Tg = styled.div`
  width: 19.86px;
  height: 16.65px;
  background-image: url(${tg});
`

export const Fb = styled.div`
  width: 19.86px;
  height: 20.07px;
  background-image: url(${fb});
`
export const Mail = styled.div`
  width: 21px;
  height: 15.18px;
  background-image: url(${mail});
`

export const SocialWrap = styled(Flex)`
  max-width: 425px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12.1vh;

  @media only screen and (max-width: 768px) {
    align-items: flex-start;
    flex-wrap: wrap;
  }
`

export const LinkWrap = styled(Flex)`
  width: auto;
  flex-direction: row;
  margin-right: 40px;
  align-items: center;

  &:nth-child(2) {
    @media only screen and (max-width: 393px) {
      margin-top: 3vh;
    }
  }

  &:last-child {
    margin-right: 0px;

    @media only screen and (max-width: 477px) {
      margin-top: 3vh;
    }
  }

  div {
    margin-right: 15px;
  }

  a {
    font-family: Neue Machina;
    font-style: normal;
    font-weight: 900;
    font-size: 13px;
    line-height: 13px;
    letter-spacing: 0.06em;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: #000000;
  }
`

export const OneMoreSocial = styled(Flex)`
  width: 100%;
  max-width: 180px;
  justify-content: space-between;
  flex-direction: row;

  p {
    font-family: Neue Machina;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.04em;
    margin-bottom: 4.1vh;
    color: #000000;
  }

  a {
    font-family: Neue Machina;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.06em;
    text-decoration-line: underline;

    color: #000000;
  }
`
