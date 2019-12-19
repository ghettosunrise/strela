import styled from "styled-components"
import pic from "../../../images/blockpic.png"

export const Title = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.07em;
  max-width: 45.1%;
  color: #000000;
`

export const Txt = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  /* or 117% */
  max-width: 32.4%;
  letter-spacing: -0.07em;

  color: #000000;
`
export const Block = styled.div`
  width: 203px;
  height: 235px;
  background-image: url(${pic});
  background-size: 100%;
`
