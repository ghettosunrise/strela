import styled from 'styled-components';
import btn from '../../../../images/buttonwhite.svg';
import btnsmol from '../../../../images/buttontrsmol.svg';
import smallsmall from '../../../../images/buttonsmallsmall.svg';
import arr from '../../../../images/arrowrbl.svg';

export const Button = styled.button`
  width: ${(props) => (props.size === 'small' ? '168.59px' : '236.59px')};
  height: ${(props) => (props.size === 'mobile' ? '47px' : '56.5px')};
display: flex;
justify-content: center;
align-items: center;
font-family: Neue Machina;
font-size: 18px;
line-height: 100 %;
background: transparent;
border: none;
background-image: url(${(props) => (props.size === 'small' ? btnsmol : btn)});
background-repeat: no - repeat;
background-size: 100 %;
outline: none;
align-items: center;
letter-spacing: -0.07em;
color: #2403a6;
cursor: pointer;

@media only screen and (max-width: 1150px) {
  width: ${(props) => (props.size === 'mobile' ? '160px' : 'small' ? '166.59px' : '235.59px')};
  background-image: url(${(props) => (props.size === 'mobile' ? smallsmall : 'small' ? btnsmol : btn)});
}

span {
  width: 38px;
  height: 19px;
  background-image: url(${ arr});
  margin-left: 11px;
  bottom: 0px!important;
}
`;


