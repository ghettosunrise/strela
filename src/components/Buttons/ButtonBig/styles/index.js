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

  display: flex;
  align-items: center;
  letter-spacing: -0.07em;
`

export default ButtonTransparent
