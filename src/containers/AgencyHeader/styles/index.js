import styled, { keyframes } from 'styled-components';

export const MyMainTitle = styled.h1`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 96px;
  /* max-width: 836px; */
  letter-spacing: -0.07em;
  margin-bottom: 0;
  color: #000000;
  transition: all 0.5s ease;
  margin-left: 6%;
  width: 77%;

  @media only screen and (max-width: 1150px) {
    font-size: 80px;
    line-height: 80px;
    margin-bottom: 90px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 60px;
    line-height: 58px;
    margin-bottom: 80px;
    margin-left: 0;
  }
`;

export const Header = styled.header`
  padding: 30px 49px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
  background: ${props => (!props.isMoved ? 'transparent' : '#f3f2f1')};
  display: flex;
  align-items: center;
  transition: background 0.2s ease;
  justify-content: space-between;
  max-width: 1440px;

  @media only screen and (max-width: 1150px) {
    padding: 23px 30px;
  }

  @media only screen and (max-width: 768px) {
    padding: 23px 20px;
  }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Img = styled.img`
  opacity: ${props => (!props.isMoved ? 1 : 0)};
  /* margin-top: 55px; */
  transition: opacity 0.4s ease;
  animation: ${rotate} 7s linear infinite;
  width: 250px;

  @media only screen and (max-width: 768px) {
    margin-top: 0px;
    margin-bottom: 60px;
  }
`;
