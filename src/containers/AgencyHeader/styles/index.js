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

  @media (max-width: 1150px) {
    font-size: 80px;
    line-height: 80px;
    margin-bottom: 90px;
  }
`
export const Header = styled.header`
  padding: 46px 49px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  background: #f3f2f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
