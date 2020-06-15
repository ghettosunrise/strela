import styled from 'styled-components';
import arrowDiv from '../../../images/arrowdiv.svg';

export const DividerText = styled.h2`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.07em;
  margin-bottom: 0;
  max-width: 46%;

  @media only screen and (max-width: 1150px) {
    font-size: 34px;
    line-height: 34px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 66%;
  }
`;

export const DividerArrow = styled.div`
  height: 2px;
  background: #000;
  flex-grow: 1;
  background-position-x: 100%;
  margin-left: 34px;
  position: relative;
  bottom: 10px;

  @media only screen and (max-width: 1150px) {
    bottom: 5px;
  }
`;
