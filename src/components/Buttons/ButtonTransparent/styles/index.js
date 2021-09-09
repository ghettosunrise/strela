import styled from 'styled-components';
import btn from '../../../../images/buttonwhite.svg';
import btnsmol from '../../../../images/buttontrsmol.svg';
import smallsmall from '../../../../images/buttonsmallsmall.svg';
import arr from '../../../../images/arrowrbl.svg';

export const Button = styled.button`
  width: ${props => (props.size === 'small' ? '168px' : '236.59px')};
  height: ${props => (props.size === 'mobile' ? '47px' : '56.5px')};
display: flex;
justify-content: center;
align-items: center;
font-family: Neue Machina;
font-size: 18px;
position: relative;
line-height: 100%;
background: ${props => (props.blue ? '#2403A6' : 'transparent')};
border: 2px solid #2403A6; 
/* background-image: url(${props =>
  props.size === 'small' ? btnsmol : btn}); */
outline: none;
align-items: center;
letter-spacing: -0.07em;
color: #2403a6;
cursor: pointer;
overflow: hidden;

@media only screen and (max-width: 450px) {
  width: 120px;
}

@media only screen and (max-width: 367px) {
  width: 100px;
}
/* 
&::after {
  transform: rotate(45deg);
    width: 40px;
    height: 40px;
    border: 2px solid #2403A6;
    position: absolute;
    right: -20px;
    content: '';
    top: -30px;
    background: #FFF;
}

&::before {
    transform: rotate(45deg);
    width: 40px;
    height: 40px;
    border: 2px solid #2403A6;
    position: absolute;
    left: -20px;
    content: '';
    bottom: -30px;
    background: #FFF;
} */

@media only screen and (max-width: 1150px) {
  width: ${props =>
    props.size === 'mobile' ? '160px' : 'small' ? '168px' : '235.59px'};
  /* background-image: url(${props =>
    props.size === 'mobile' ? smallsmall : 'small' ? btnsmol : btn}); */
}

span {
  width: 38px;
  height: 19px;
  background-image: url(${arr});
  margin-left: 11px;
  bottom: 0px!important;
}
`;

export const StyloOne = styled.div`
  background: #fff;
  transform: rotate(45deg);
  width: 40px;
  height: 40px;
  border: 2px solid #2403a6;
  position: absolute;
  left: -25px;
  z-index: 1;
  bottom: ${props => (props.small ? '-21px' : '-30px')};

  @media only screen and (max-width: 768px) {
    /* border: 1px solid black; */
    bottom: -21px;
  }
`;

export const StyloFour = styled.div`
  background: #fff;
  transform: rotate(45deg);
  width: 40px;
  height: 40px;
  border: 2px solid #2403a6;
  position: absolute;
  right: -24px;
  z-index: 1;
  top: ${props => (props.small ? '-21px' : '-30px')};

  @media only screen and (max-width: 768px) {
    /* border: 1px solid black; */
    top: -21px;
  }
`;
