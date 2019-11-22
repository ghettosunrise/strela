import styled, { css } from "styled-components"
import Button from "../images/button.svg"
import arrR from "../images/arrw.svg"

export const BlackButton = styled.div`
  width: 205.59px;
  height: 54.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Neue Machina";
  font-size: 18px;
  line-height: 86px;
  /* or 478% */
  color: #ffffff;
  display: flex;
  align-items: center;
  letter-spacing: -0.07em;
  background-image: url(${Button});
  cursor: pointer;

  span {
    width: 38px;
    height: 19px;
    background-image: url(${arrR});
    background-size: 100%;
    margin-left: 11px;
    position: relative;
    bottom: 2px;
  }
`
