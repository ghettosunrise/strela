import styled from 'styled-components';
import arrow from '../../../images/mainpagearrow.svg';

export const Arrow = styled.div`
  width: 643px;
  height: 100%;
  position: absolute;
  background-image: url(${arrow});
  left: ${props => props.left};
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  background-repeat: no-repeat;
  z-index: ${props => props.z || 0};
  background-size: 100%;

  @media only screen and (min-width: 1441px) {
    width: 100%;
  }
`;
