import styled from "styled-components"
import Button from "../../../components/Buttons/ButtonBig"

export const NewButton = styled(Button)`
  a {
    font-size: 24px;
    line-height: 28px;
    height: 55px;
  }
`

export const InvisButton = styled.button`
  font-size: 24px;
  line-height: 28px;
  height: 55px;
  width: 245px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Neue Machina;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  letter-spacing: -0.07em;
`
export const Txt = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`
