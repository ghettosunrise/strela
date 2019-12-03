import styled, { css } from "styled-components"
import ButtonTr from "../../../../images/buttontr.svg"
import { Link } from "gatsby"

const noEvent = css`
  pointer-events: none;
`

export const ButtonTransparent = styled(Link)`
  width: 100%;
  height: ${props => (props.small ? "54px" : "84px")};
  border: 2px solid black;
  background-size: 100% 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Neue Machina;
  font-size: ${props => (props.small ? "24px" : "36px")};
  line-height: ${props => (props.small ? "28px" : "86px")};
  position: relative;
  display: flex;
  align-items: center;
  letter-spacing: -0.07em;
  ${props => (props.small ? noEvent : null)}
`
export const StyloOne = styled.div`
  background: #f3f2f1;
  transform: rotate(45deg);
  width: 40px;
  height: 40px;
  border: 2px solid #000;
  position: absolute;
  left: -20px;
  bottom: ${props => (props.small ? "-36px" : "-30px")};
`

export const StyloTwo = styled.div`
  background: #f3f2f1;
  transform: rotate(45deg);
  width: 40px;
  height: 40px;
  border: 2px solid #000;
  position: absolute;
  right: -20px;
  bottom: ${props => (props.small ? "-36px" : "-30px")};
`

export const StyloThree = styled.div`
  background: #f3f2f1;
  transform: rotate(45deg);
  width: 40px;
  height: 40px;
  border: 2px solid #000;
  position: absolute;
  left: -20px;
  top: ${props => (props.small ? "-36px" : "-30px")};
`

export const StyloFour = styled.div`
  background: #f3f2f1;
  transform: rotate(45deg);
  width: 40px;
  height: 40px;
  border: 2px solid #000;
  position: absolute;
  right: -20px;
  top: ${props => (props.small ? "-36px" : "-30px")};
`
