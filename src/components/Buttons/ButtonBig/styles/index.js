import styled from "styled-components"
import ButtonTr from "../../../../images/buttontr.svg"
import { Link } from "gatsby"

export const ButtonTransparent = styled(Link)`
  width: 100%;
  height: 84px;
  border: 2px solid black;
  background-size: 100% 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Neue Machina;
  font-size: 36px;
  line-height: 86px;
  /* or 239% */
  position: relative;
  display: flex;
  align-items: center;
  letter-spacing: -0.07em;
`
export const StyloOne = styled.div`
  background: #f3f2f1;
  transform: rotate(45deg);
  width: 40px;
  height: 40px;
  border: 2px solid #000;
  position: absolute;
  left: -20px;
  bottom: -30px;
`

export const StyloTwo = styled.div`
  background: #f3f2f1;
  transform: rotate(45deg);
  width: 40px;
  height: 40px;
  border: 2px solid #000;
  position: absolute;
  right: -20px;
  bottom: -30px;
`

export const StyloThree = styled.div`
  background: #f3f2f1;
  transform: rotate(45deg);
  width: 40px;
  height: 40px;
  border: 2px solid #000;
  position: absolute;
  left: -20px;
  top: -30px;
`

export const StyloFour = styled.div`
  background: #f3f2f1;
  transform: rotate(45deg);
  width: 40px;
  height: 40px;
  border: 2px solid #000;
  position: absolute;
  right: -20px;
  top: -30px;
`
