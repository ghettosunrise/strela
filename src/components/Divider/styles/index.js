import styled from "styled-components"
import arrowDiv from ".././../../images/arrowdiv.svg"

export const DividerText = styled.h2`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.07em;
  margin-bottom: 50px;
`

export const DividerArrow = styled.div`
  height: 2px;
  background: url(${arrowDiv});
  flex-grow: 1;
  height: 19px;
  background-position-x: 100%;
  margin-left: 34px;
  position: relative;
  top: 17px;
`
