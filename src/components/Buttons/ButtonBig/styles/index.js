import styled, { css } from "styled-components"
import { Link } from "gatsby"

const noEvent = css`
  pointer-events: none;
`

export const ButtonTransparent = styled(Link)`
  width: 100%;
  height: ${props => (props.small ? "54px" : "84px")};
  border: 2px solid black;
  background-size: 100% 84px;
  justify-content: center;
  font-family: Neue Machina;
  font-size: ${props => (props.small ? "24px" : "36px")};
  line-height: ${props => (props.small ? "28px" : "86px")};
  position: relative;
  display: flex;
  align-items: center;
  letter-spacing: -0.07em;
  background: linear-gradient(transparent);
  ${props => (props.small ? noEvent : null)}
  transition: all .5s ease;

  &:hover {
    color: #fff;
    background: linear-gradient(
      196.61deg,
      rgba(0, 0, 0, 0.48) -9.45%,
      #000000 77.6%
    );
  }

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    height: ${props => (props.small ? "54px" : "60px")};
    border: 1px solid black;
  }
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

  @media only screen and (max-width: 768px) {
    border: 1px solid black;
    bottom: -39px;
  }
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

  @media only screen and (max-width: 768px) {
    border: 1px solid black;
    bottom: -39px;
  }
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

  @media only screen and (max-width: 768px) {
    border: 1px solid black;
    top: -39px;
  }
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

  @media only screen and (max-width: 768px) {
    border: 1px solid black;
    top: -39px;
  }
`
