/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import Flex from '../../../styled/flex';

const order1 = css`
  order: 1;
`;

const order2 = css`
  order: 2;
`;

const order3 = css`
  order: 3;
`;

const order4 = css`
  order: 4;
`;

const order5 = css`
  order: 5;
`;

const order6 = css`
  order: 6;
`;

const order7 = css`
  order: 7;
`;

export const extraSmall = css`
  width: 15.5%;

  @media only screen and (max-width: 1150px) {
    width: 24.4%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const small = css`
  width: 23.6%;

  @media only screen and (max-width: 1150px) {
    width: 48.8%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const mediumSmall = css`
  width: 32.3%;

  @media (max-width: 1150px) {
    width: 48.8%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const medium = css`
  width: 48.8%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const big = css`
  width: 100%;
  flex-grow: 1;
`;

export const MyNews = styled(Flex)`
  margin-bottom: 60px;

  ${props => {
    if (props.mainPage) {
      if (props.position === '1') {
        return [order1, medium];
      }

      if (props.position === '2') {
        return [order2, medium];
      }

      if (props.position === '3') {
        return [order3, medium];
      }

      if (props.position === '4') {
        return [order4, small];
      }

      if (props.position === '5') {
        return [order5, small];
      }

      if (props.position === '6') {
        return [order6, small];
      }

      if (props.position === '7') {
        return [order7, small];
      }
    }

    if (props.size === 'small' && !props.position) {
      return small;
    }
  }}
`;

// props.size === 'small'
//   ? small
//   : props.size === 'medium'
//   ? medium
//   : props.size === 'mediumSmall'
//   ? mediumSmall
//   : props.size === 'big'
//   ? big
//   : null;

export const Special = styled(Flex)`
  width: 100%;

  background-color: #000;
  position: relative;
  padding: 18px 18px 40px 14px;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    padding: 15px 15px 30px;

    img {
      margin-bottom: 20px;
    }
  }

  &::before {
    content: '';
    width: 100%;
    height: 110px;
    background: #f3f2f1;
    position: absolute;
    left: -120px;
    bottom: -60px;
    transform: rotate(45deg);

    @media only screen and (max-width: 1150px) {
      bottom: -150px;
    }

    @media only screen and (max-width: 768px) {
      left: -30%;
    }
  }

  &::after {
    content: '';
    width: 100%;
    height: 110px;
    background: #f3f2f1;
    position: absolute;
    right: -120px;
    top: -60px;
    transform: rotate(45deg);

    @media only screen and (max-width: 1150px) {
      top: -150px;
    }

    @media only screen and (max-width: 768px) {
      right: -30%;
    }
  }
`;

export const Title = styled.h4`
  font-family: Neue Machina;
  font-size: ${props => (props.extraLarge ? '48px' : '24px')};
  line-height: ${props => (props.extraLarge ? '48px' : '28px')};
  letter-spacing: -0.07em;
  margin-bottom: 16px;
  margin-top: 24px;
  color: #000000;
  font-weight: normal;
`;

export const TitleBig = styled.h4`
  font-family: Neue Machina;
  letter-spacing: -0.07em;
  margin-bottom: 16px;
  margin-top: 24px;
  color: #000000;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
`;

export const Description = styled.p`
  font-family: Formular;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.7;
  margin-bottom: 40px;
`;

export const Date = styled.p`
  font-family: Formular;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #000000;
  opacity: 0.5;
`;

export const SpecialTitle = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.07em;
  color: #ffffff;
  padding-left: 40px;
`;

export const SpecialDate = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.07em;
  color: #ffffff;
  padding-left: 40%;
`;
