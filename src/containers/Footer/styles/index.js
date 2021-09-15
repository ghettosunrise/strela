import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 55px 49px 40px;
  background: #fff;
  z-index: 1;

  @media only screen and (max-width: 1150px) {
    padding: 55px 30px 40px;
  }
`;

export const FooLink = styled.a`
  font-family: Formular;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #000000;
`;

export const FooTxt = styled.p`
  font-family: Formular;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #000000;
  text-align: right;
  max-width: 160px;
  top: 7px;
  position: relative;

  @media only screen and (max-width: 768px) {
    text-align: left;
    max-width: 218px;
  }
`;
export const BottomTxt = styled.p`
  font-family: Formular;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.5;
`;
