import styled from "styled-components"
import Flex from "../../../styled/flex"

export const TxtContainer = styled(Flex)`
  width: 57.7%;
  padding-left: 16.6%;

  @media only screen and (max-width: 1150px) {
    width: 79.7%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`

export const Text = styled.p`
  font-family: Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.03em;
  margin-bottom: 60px;
  color: #000000;

  @media only screen and (max-width: 768px) {
    margin-bottom: 40px;
    font-size: 22px;
  }
`
export const Title = styled.h2`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.07em;
  color: #000000;
  margin-bottom: 70px;

  @media only screen and (max-width: 768px) {
    margin-bottom: 40px;
    font-size: 36px;
    line-height: 38px;
  }
`

export const ImgDesc = styled.p`
  font-family: Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #000000;
  opacity: 0.5;
`
export const ImgWrap = styled(Flex)`
  img {
    margin-bottom: 10px;
  }
`
