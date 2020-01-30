import styled from "styled-components"

export const MyMainTitle = styled.h1`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 96px;
  max-width: 836px;
  letter-spacing: -0.07em;
  margin-bottom: 113px;
  color: #000000;
  transition: all 0.5s ease;
  margin-left: 6%;

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
`

export const Header = styled.header`
  padding: 46px 49px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
  background: #f3f2f1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1150px) {
    padding: 23px 30px;
  }

  @media only screen and (max-width: 768px) {
    padding: 23px 20px;
  }
`
