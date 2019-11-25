import styled from "styled-components"
import Button from "../../../../images/button.svg"
import arrR from "../../../../images/arrw.svg"

export const BlackButton = styled.div`
  min-width: 205.59px;
  height: 54.5px;
  justify-content: center;
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
  background-size: 100%;

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

export default BlackButton
