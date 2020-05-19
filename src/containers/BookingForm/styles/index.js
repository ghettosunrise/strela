import styled, { css, keyframes } from 'styled-components'
import { Form } from 'formik'
import Flex from '../../../styled/flex'
import close from '../../../images/close.svg'

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
  right: ${({ isClosed }) => (isClosed ? '-100%' : 0)};
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
  cursor: pointer;

  @media only screen and (max-width: 1150px) {
    width: 0;
  }
`

export const BookingWrap = styled(Flex)`
  width: 73%;
  padding: 5vh 4.8% 7.6vh 10.3%;
  background-color: #fff;
  height: 100vh;
  overflow-y: auto;

  @media only screen and (max-width: 1150px) {
    width: 100%;
    padding: 5vh 4.8% 7.6vh 16.6%;
  }

  @media only screen and (max-width: 918px) {
    width: 100%;
    padding: 5vh 4.8% 7.6vh;
  }
`
export const Title = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
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

export const ChooseArtist = styled.p`
  font-family: Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
  letter-spacing: -0.03em;
  display: flex;
  color: #000000;

  span {
    font-size: 10px;
    margin-left: 5px;
    transform: ${props =>
      props.artistPickerOpen === true ? 'rotate(180deg)' : null};
  }
`

export const ArtistPicker = styled.ul`
  flex-wrap: wrap;
  max-width: 90%;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 50px;
  margin-left: 0;
  display: flex;

  li {
    cursor: pointer;
    font-family: Neue Machina;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 10px;
    letter-spacing: -0.07em;
    list-style-type: none;
    margin-right: 20px;
    opacity: ${props => (props.artistPickerOpen === true ? 1 : 0)};
    transition: all 0.8s ease-in-out;
  }
`

export const Close = styled.span`
  width: 17px;
  height: 17px;
  background-image: url(${close});
  /* background: ${props => (props.length <= 1 ? 'red' : 'green')} */
  cursor: pointer;
`

export const YourChoice = styled(Flex)`
  width: 100%;
  margin-bottom: 4vh;

  ul {
    margin-left: 0;
    display: flex; 

  }

  li {
    font-style: normal; 
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    font-family: Neue Machina;
    margin-bottom: 0px;
    letter-spacing: -0.07em;
    display: flex;
    align-items: center;
    margin-right: 20px; 
    display: flex;
    justify-content: space-between;
    position: relative;

    
    
    

    /* span {
      font-size: 14px;
      cursor: pointer;
      margin-left: 10px;
      color: #2403a6;
      display: ${props => (props.artistPickerOpen === true ? 'block' : 'none')};
    } */
  }
  
`

export const P = styled.p`
  font-family: Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  letter-spacing: 0.06em;
  text-transform: uppercase;
`

export const FormInfo = styled.p`
  font-family: Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 1.4vh;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  color: #000000;
`
