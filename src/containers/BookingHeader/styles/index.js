import styled from 'styled-components';
import Nav from '../../Nav';

export const HeaderWrap = styled.header`
  background: #fff;
  width: 100%;
  padding: 30px 49px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: flex;

  ${Nav} & {
    /* background: red; */
  }

  img {
    margin-right: 5.1%;
  }

  @media only screen and (max-width: 1050px) {
    padding: 40px 30px;
  }

  @media only screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Title = styled.h1`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 96px;
  margin-left: 5.1%;
  order: 1;
  letter-spacing: -0.07em;
  margin-bottom: 74px;
  color: #000000;

  @media only screen and (max-width: 1150px) {
    font-size: 76px;
    line-height: 76px;
    margin-bottom: 34px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 56px;
    line-height: 48px;
    margin-bottom: 34px;
    order: 1;
    margin-left: 0;
  }
`;
