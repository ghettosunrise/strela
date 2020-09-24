import styled from 'styled-components';
import btn from '../../../../images/bluebtn.svg';

export const Button = styled.a`
  width: 150px;
  height: 46px;
  cursor: pointer;
  font-family: Neue Machina;
  font-size: 18px;
  line-height: 86px;
  /* background-image: url(${btn}); */
  background: #2403A6;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.07em;
  color: #ffffff;
`;

export const StyloOne = styled.div`
  background: #fff;
  transform: rotate(45deg);
  width: 40px;
  height: 40px;
  border: 2px solid #000;
  position: absolute;
  left: -25px;
  bottom: ${props => (props.small ? '-26px' : '-30px')};

  @media only screen and (max-width: 768px) {
    border: 1px solid black;
    bottom: -39px;
  }
`;

export const StyloFour = styled.div`
  background: #fff;
  transform: rotate(45deg);
  width: 40px;
  height: 40px;
  border: 2px solid #000;
  position: absolute;
  right: -25px;
  top: ${props => (props.small ? '-26px' : '-30px')};

  @media only screen and (max-width: 768px) {
    border: 1px solid black;
    top: -39px;
  }
`;
