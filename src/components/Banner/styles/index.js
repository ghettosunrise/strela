import styled, { css } from "styled-components"
import Flex from "../../../styled/flex"
import arrowdown from "../../../images/arrowdown.svg"

const LinkDecor = css`
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
`

const OtherDecor = css`
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
`

export const Banner = styled(Flex)`
  width: 100%;
  padding: 25px 25px 25px 35px;
  /* background: ${props =>
    props.link ? "#fff" : props.cases || props.news ? "#000" : null}; */
  background: #FFF;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 114px;

  /* ${props =>
    props.link ? LinkDecor : props.cases || props.news ? OtherDecor : null} */

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

export const NewsBanner = styled(Flex)`
  width: 100%;
  padding: 70px 56px 71px 47px;
  background: #000;
  flex-direction: row;
  margin-bottom: 100px;
  ${OtherDecor}
`

export const CaseBanner = styled(Flex)`
  width: 100%;
  padding: 25px 25px 25px 8.4%;
  background: #000;
  ${OtherDecor};
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 87px;

  img {
    max-width: 476px;
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
export const NewsTitle = styled.h1`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 96px;
  letter-spacing: -0.07em;
  color: #ffffff;
  max-width: 62%;
  width: 100%;
`

export const NewsDescription = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.07em;
  color: #ffffff;
  opacity: 0.5;
  flex-grow: 1;
`
export const CaseTitle = styled.h1`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 96px;
  letter-spacing: -0.07em;
  margin-bottom: 40px;
  color: #ffffff;
  padding-top: 35px;
`
export const CaseDescription = styled.p`
  font-family: Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 76px;
  opacity: 0.5;

  width: 100%;
`
