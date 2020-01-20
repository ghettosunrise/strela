import styled from "styled-components"
import Button from "../../../components/Buttons/ButtonBig"
import Flex from "../../../styled/flex"
import { LinkDecor } from "../../../components/Banner/styles"

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

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    height: 54px;
    width: 100%;
  }
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
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`

export const ServiceContent = styled(Flex)`
  width: 79%;
  padding: 56px 199px 195px 56px;
  position: relative;
  background: #fff;
  ${LinkDecor};
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    padding: 50px 16px 41px 40px;
    width: 100%;
  }

  @media only screen and (max-width: 460px) {
    padding: 50px 16px 41px 16px;
  }
`

export const Title = styled.h2`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.07em;
  margin-bottom: 61px;
  color: #000000;

  @media only screen and (max-width: 380px) {
    font-size: 35px;
    line-height: 35px;
  }
`
export const List = styled.ul`
  font-family: Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.03em;
  color: #000000;

  @media only screen and (max-width: 460px) {
    font-size: 18px;
    line-height: 24px;
  }

  li {
    margin-bottom: 20px;
  }
`
