import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import Button from '../../../../images/button.svg';
import Button1 from '../../../../images/button1.svg';
import arrR from '../../../../images/arrw.svg';

const BlackBtn = css`
  min-width: 205.59px;
  height: 54.5px;
  justify-content: center;
  font-family: "Neue Machina";
  font-size: 18px;
  line-height: 86px;
  transition: all 0.3s ease;
  color: #ffffff;
  display: flex;
  align-items: center;
  overflow: hidden;
  letter-spacing: -0.07em;
  background: black;
  /* background-image: url(${Button}); */
  cursor: pointer;
  background-size: 100%;
  position: relative;

  &::after {
    background: ${props => (props.bgColor === 'white' ? '#fff' : '#f3f2f1')};
    transform: rotate(45deg);
    width: 40px;
    height: 40px;
    border: 2px solid #000;
    position: absolute;
    left: -20px;
    content: '';
    bottom: ${props => (props.small ? '-36px' : '-30px')};

    @media only screen and (max-width: 768px) {
      border: 1px solid black;
      bottom: -39px;
    }
  }

  &::before {
  background: ${props => (props.bgColor === 'white' ? '#fff' : '#f3f2f1')};
  transform: rotate(45deg);
  width: 40px;
  height: 40px;
  border: 2px solid #000;
  position: absolute;
  right: -20px;
  content: '';
  top: ${props => (props.small ? '-36px' : '-30px')};

  @media only screen and (max-width: 768px) {
    border: 1px solid black;
    top: -39px;
  }
  }



  &:hover {
    background-image: url(${Button1});
  }
`;

export const BlackButtonLink = styled(Link)`
  ${BlackBtn}
`;

export const BlackButton = styled.div`
  ${BlackBtn}
`;
