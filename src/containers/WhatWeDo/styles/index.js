import styled from "styled-components"
import Flex from "../../../styled/flex"

export const Title = styled.h2`
  font-family: Neue Machina;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.07em;
  margin-bottom: 338px;
  font-weight: 400;

  @media (max-width: 1150px) {
    margin-bottom: 38px;
  }
`

export const WWFlex = styled(Flex)`
  width: 100%;
  max-width: 49%;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`

export const SubTitle = styled.h3`
  font-family: Neue Machina;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.07em;
  max-width: 366px;
  margin-bottom: 63px;
  font-weight: 400;

  @media (max-width: 1150px) {
    max-width: 100%;
  }
`

export const Number = styled.p`
  font-family: Neue Machina;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.07em;
  margin-bottom: 25px;
  font-weight: 500;
`
export const BlockTitle = styled.p`
  font-family: Neue Machina;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 10px;
  letter-spacing: -0.07em;
  font-weight: 500;
`
export const BlockSubtitle = styled.p`
  font-family: Formular;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #000000;
  font-weight: 300;
  opacity: 0.5;

  @media only screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
`
