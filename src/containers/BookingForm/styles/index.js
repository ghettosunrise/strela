import styled, { css, keyframes } from "styled-components"
import Flex from "../../../styled/flex"
import close from "../../../images/close.svg"
import { Form } from "formik"

const shadowOn = css`
  background: #000;
`

const shadowOff = css`
  background: transparent;
`

export const CustomForm = styled(Form)`
  width: 100%;
  max-width: 718px;
  display: flex;
  justify-content: space-between;

  p {
    font-family: Formular;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 1.4vh;
    color: #000000;
  }

  textarea {
    resize: none;
    height: 61px;
  }

  textarea,
  input {
    border: none;
    border-bottom: 1px solid black;
    min-width: 320px;
    font-family: Formular;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */
    outline: none;
    letter-spacing: -0.03em;
    margin-bottom: 3.7vh;
    color: #000000;
  }

  span {
    font-family: Formular;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 24px;
    /* or 218% */
    letter-spacing: -0.03em;
    position: relative;
    bottom: 4vh;
    color: #ff3939;
  }
`

export const ContactWrap = styled(Flex)`
  position: fixed;
  right: ${({ isClosed }) => (isClosed ? "-100%" : 0)};
  top: 0;
  z-index: 5;
  height: 100vh;
  width: 100%;
  transition: right 0.4s ease;
  flex-direction: row;
`

const fadeIn = keyframes`
  0% {
    background: transparent;
  }
  100% {
    background: black;
  }
`

const fadeOut = keyframes`
  0% {
   
    background: black;
  }
  100% {
    background: transparent;
  }
`

const fadeInAnim = css`
  animation: ${fadeIn} 0.4s 0.3s forwards;
`

const fadeOutAnim = css`
  animation: ${fadeOut} 0s 0.3s forwards;
`

export const Shadow = styled.div`
  width: 48%;
  height: 100%;
  opacity: 0.3;
  background: transparent;
  ${({ isClosed }) => (isClosed ? fadeOutAnim : fadeInAnim)};
  transition: all 0.4s ease;
`

export const BookingWrap = styled(Flex)`
  width: 73%;
  padding: 5vh 4.8% 7.6vh 10.3%;
  background-color: #fff;
  height: 100vh;
`
export const Title = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  /* or 100% */

  letter-spacing: -0.07em;
  margin-bottom: 3.5vh;
  color: #000000;
`
export const ArtistChoose = styled.div`
  font-family: Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6vh;
  color: #000000;
`
export const FormInfo = styled.p`
  font-family: Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  margin-bottom: 1.4vh;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  color: #000000;
`

export const Close = styled.div`
  width: 17px;
  height: 17px;
  background-image: url(${close});
  cursor: pointer;
`
