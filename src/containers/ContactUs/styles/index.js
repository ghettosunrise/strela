import styled, { css, keyframes } from 'styled-components';
import Flex from '../../../styled/flex';
import tg from '../../../images/tg.svg';
import fb from '../../../images/fb.svg';
import mail from '../../../images/mail.svg';
import close from '../../../images/close.svg';
import arrow from '../../../images/arrowdiv.svg';

const shadowOn = css`
  background: #000;
`;

const shadowOff = css`
  background: transparent;
`;

export const ContactWrap = styled(Flex)`
  position: fixed;
  right: ${({ isClosed }) => (isClosed ? '-100%' : 0)};
  top: 0;
  z-index: 10001;
  height: 100vh;
  width: 100%;
  transition: right 0.4s ease;
  flex-direction: row;
`;

export const Contact = styled(Flex)`
  width: 52%;
  /* position: fixed;
  right: ${({ isClosed }) => (isClosed ? '-52%' : 0)};
  top: 0;
  z-index: 5;
  height: 100vh; */
  background: #fff;
  height: 100%;
  padding-top: 4.4vh;
  padding-right: 51px;
  padding-left: 53px;
  /* transition: right 0.4s ease; */
`;

const fadeIn = keyframes`
  0% {
    background: transparent;
  }
  100% {
    background: black;
  }
`;

const fadeOut = keyframes`
  0% {
   
    background: black;
  }
  100% {
    background: transparent;
  }
`;

const fadeInAnim = css`
  animation: ${fadeIn} 0.4s 0.3s forwards;
`;

const fadeOutAnim = css`
  animation: ${fadeOut} 0s 0.3s forwards;
`;

export const Shadow = styled.div`
  width: 48%;
  height: 100%;
  opacity: 0.3;
  background: transparent;
  ${({ isClosed }) => (isClosed ? fadeOutAnim : fadeInAnim)};
  transition: all 0.4s ease;
`;

export const Title = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.07em;
  color: #000000;
  margin-bottom: 6.6vh;
`;
export const SubTitle = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.07em;
  margin-bottom: 6.6vh;
`;

export const Tg = styled.div`
  width: 19.86px;
  height: 16.65px;
  background-image: url(${tg});
`;

export const Fb = styled.div`
  width: 19.86px;
  height: 20.07px;
  background-image: url(${fb});
`;
export const Mail = styled.div`
  width: 21px;
  height: 15.18px;
  background-image: url(${mail});
`;
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
`;

export const Close = styled.div`
  width: 17px;
  height: 17px;
  background-image: url(${close});
  cursor: pointer;
`;

export const Arrow = styled.div`
  width: 100%;
  height: 19px;
  background-image: url(${arrow});
  background-position-x: 100%;
  margin-bottom: 5.4vh;
  margin-top: 23vh;
`;
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
`;

export const Line = styled.div`
  width: 90%;
  border: 2px solid black;
  margin-top: 11.8vh;
  margin-bottom: 3.1vh;
`;

export const BottomTxt = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.07em;
  max-width: 482px;
`;

export const MailLink = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: 900;
  font-size: 13px;
  line-height: 13px;
  letter-spacing: 0.06em;
  text-decoration-line: underline;
  text-transform: uppercase;
  cursor: pointer;
  color: #000000;
  margin-left: 10px;
  margin-bottom: 0;
`;
