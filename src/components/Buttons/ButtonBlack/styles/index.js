import styled, { css } from "styled-components"
import Button from "../../../../images/button.svg"
import Button1 from "../../../../images/button1.svg"
import arrR from "../../../../images/arrw.svg"
import { Link } from "gatsby"

const BlackBtn = css`
  min-width: 205.59px;
  height: 54.5px;
  justify-content: center;
  font-family: "Neue Machina";
  font-size: 18px;
  line-height: 86px;
  transition: all 0.3s ease;
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

  &:hover {
    background-image: url(${Button1});
  }
`

export const BlackButtonLink = styled(Link)`
  ${BlackBtn}
`

export const BlackButton = styled.div`
  ${BlackBtn}
`
