import styled, { css } from 'styled-components';
import Flex from '../../../styled/flex';
import arrowdown from '../../../images/arrowdown.svg';
import ukazateli from '../../../images/ukazateli.svg';

export const LinkDecor = css`
  &::before {
    content: '';
    width: 170px;
    height: 110px;
    background: #f3f2f1;
    position: absolute;
    left: -80px;
    bottom: -60px;
    transform: rotate(45deg);
  }

  &::after {
    content: '';
    width: 170px;
    height: 110px;
    background: #f3f2f1;
    position: absolute;
    right: -80px;
    top: -60px;
    transform: rotate(45deg);
  }
`;

const OtherDecor = css`
  &::after {
    content: '';
    width: 170px;
    height: 110px;
    background: #f3f2f1;
    position: absolute;
    right: -80px;
    top: -60px;
    transform: rotate(45deg);
  }
`;

export const Banner = styled(Flex)`
  width: 100%;
  padding: 25px 25px 25px 35px;
  /* background: ${props =>
    props.link ? '#fff' : props.cases || props.news ? '#000' : null}; */
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

`;

export const NewsBanner = styled(Flex)`
  width: 100%;
  /* padding: 70px 56px 50px; */
  padding-top: 94px;
  background: #000;
  flex-direction: column;
  margin-bottom: 140px;
  /* ${OtherDecor} */
  overflow: hidden;
  position: relative;

  @media only screen and (max-width: 1050px) {
    margin-bottom: 60px;
  }

  @media only screen and (max-width: 900px) {
    padding: 40px 25px 25px;
  }
`;

export const CaseBanner = styled(Flex)`
  width: 100%;
  /* padding: 25px 25px 25px 52px; */
  background: #000;
  /* ${OtherDecor}; */
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 87px;
  overflow: hidden;
  align-items: stretch;

  @media only screen and (max-width: 1150px) {
    padding: 25px;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 60px;
  }

  img {
    max-width: 510px;
    margin-bottom: 0;

    @media only screen and (max-width: 1150px) {
      width: 45.7%;
    }
  }
`;

export const Title = styled.h3`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  margin-bottom: 25px;
  padding-left: 10px;
  letter-spacing: -0.07em;

  @media only screen and (max-width: 1150px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const SubTitle = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 52px;
  padding-left: 10px;
  letter-spacing: -0.07em;

  @media only screen and (max-width: 1150px) {
    margin-bottom: 22px;
    font-size: 21px;
    line-height: 24px;
  }
`;
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

  @media only screen and (max-width: 1150px) {
    line-height: 21px;
    font-size: 16px;
  }
`;
export const Arrow = styled.span`
  height: 201px;
  width: 32px;
  background-image: url(${arrowdown});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  margin-left: 12px;
  margin-right: 62px;

  @media only screen and (max-width: 1150px) {
    margin-right: 20px;
  }
`;

export const NewsTitle = styled.h1`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 96px;
  letter-spacing: -0.07em;
  color: #ffffff;
  /* max-width: 62%; */
  max-width: ${props => (props.language === 'RUS' ? '70%' : '80%')};
  margin-bottom: 124px;
  width: 100%;

  @media only screen and (max-width: 1150px) {
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 44px;
  }
`;

export const NewsDescription = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.07em;
  color: #ffffff;
  opacity: 0.5;
  /* flex-grow: 1; */
  max-width: 759px;

  @media only screen and (max-width: 1150px) {
    font-size: 22px;
  }
`;
export const CaseTitle = styled.h1`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 96px;
  letter-spacing: -0.07em;
  margin-bottom: 40px;
  color: #ffffff;
  padding-top: 76px;

  @media only screen and (max-width: 1150px) {
    font-size: 78px;
    line-height: 78px;
  }

  @media only screen and (max-width: 768px) {
    padding-top: 0;
    font-size: 56px;
    line-height: 48px;
    margin-bottom: 24px;
  }
`;
export const CaseDescription = styled.p`
  font-family: Formular;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ffffff;
  opacity: 0.5;
  max-width: 56%;
  margin-bottom: 0;

  @media only screen and (max-width: 1150px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 63px;
  }
`;

export const Ukazateli = styled.div`
  width: 439px;
  height: 432px;
  background-image: url(${ukazateli});
  position: absolute;
  right: 18px;
  bottom: 0;
  z-index: 2;

  @media only screen and (max-width: 1150px) {
    display: none;
  }
`;

export const Line = styled.div`
  width: 100%;
  border-top: 1px solid #ffffff;
  margin-bottom: 23px;
  opacity: 0.6;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
