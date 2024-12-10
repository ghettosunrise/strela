import styled from 'styled-components';
import arrR from '../images/arrowr.svg';
import Flex from './flex';
import newLogo from '../images/strila_logo.svg';
// import Flex from "./flex"

export const StyledHeader = styled.header`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  display: flex;
  margin-bottom: 65px;
`;

export const HeaderLogoWrap = styled(Flex)`
  a {
    width: 93px;
    height: 39px;
    background-image: url(${newLogo});
    background-size: 100%;
  }

  span {
    width: 48px;
    height: 23px;
    background-image: url(${arrR});
    background-size: 100%;
  }

  @media (max-width: 1200px) {
    max-width: 170px;
  }
`;
