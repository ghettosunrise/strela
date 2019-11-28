import styled from "styled-components"
import Flex from "../../../styled/flex"
import arrowdown from "../../../images/arrowdown.svg"

export const Banner = styled(Flex)`
  width: 100%;
  padding: 25px 25px 25px 35px;
  background: #fff;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    width: 170px;
    height: 110px;
    background: #f3f2f1;
    position: absolute;
    left: -80px;
    bottom: -60px;
    transform: rotate(45deg);
  }

  &::after {
    content: "";
    width: 170px;
    height: 110px;
    background: #f3f2f1;
    position: absolute;
    right: -80px;
    top: -60px;
    transform: rotate(45deg);
  }

  img {
    flex-grow: 1;
    margin-bottom: 0;
  }
`

export const Title = styled.h3`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  margin-bottom: 25px;
  padding-left: 10px;
  letter-spacing: -0.07em;
`

export const SubTitle = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 52px;
  padding-left: 10px;
  letter-spacing: -0.07em;
`
export const Description = styled.p`
  font-family: Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.5;
  padding-left: 12%;
`
export const Arrow = styled.span`
  height: 201px;
  width: 32px;
  background-image: url(${arrowdown});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  margin-left: 12px;
  margin-right: 62px;
`
const BannerPic = styled.div`
  height: 100%;
  flex-shrink: 1;
`
