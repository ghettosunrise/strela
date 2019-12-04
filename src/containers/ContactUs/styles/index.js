import styled from "styled-components"
import Flex from "../../../styled/flex"
import tg from "../../../images/tg.svg"
import fb from "../../../images/fb.svg"
import mail from "../../../images/mail.svg"
import close from "../../../images/close.svg"
import arrow from "../../../images/arrowdiv.svg"

export const Contact = styled(Flex)`
  width: 52%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 5;
  height: 100vh;
  background: #fff;
  padding-top: 5.4vh;
  padding-right: 51px;
  padding-left: 112px;
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
  margin-bottom: 6.6vh;
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
export const LinkWrap = styled(Flex)`
  width: auto;
  flex-direction: row;
  margin-right: 40px;
  align-items: center;
  &:last-child {
    margin-right: 0px;
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

export const Close = styled.div`
  width: 17px;
  height: 17px;
  background-image: url(${close});
`

export const Arrow = styled.div`
  width: 100%;
  height: 19px;
  background-image: url(${arrow});
  background-position-x: 100%;
  margin-bottom: 5.4vh;
  margin-top: 23vh;
`
export const BottomTxtWrap = styled(Flex)`
  font-family: Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #000000;
  flex-direction: row;
  p {
    max-width: 208px;
    width: 100%;
    margin-right: 19px;
  }

  a {
    text-decoration: underline;
  }
`
