import styled from 'styled-components';
import Flex from '../../../styled/flex';

export const TopNav = styled(Flex)`
  transition: opacity 0.3s ease;
  opacity: ${(props) => {
    return props.isMoved === false && props.isTop === true ?
      0 :
      props.isMoved === true && props.isBottom === true ?
        0 :
        1;
  }};

  @media only screen and (max-width: 768px) {
    align-items: ${(props) =>
    props.mobileAlign ? props.mobileAlign : 'inherit'};
  }

  a,
  span {
    font-family: Formular;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    color: #000000;
    margin-bottom: ${(props) => props.space};
    position: relative;

    &.active {
      &::after {
        width: 100%;
        content: "";
        height: 2px;
        background-color: #000;
        position: absolute;
        bottom: -11px;
        left: 0;
      }
    }

    :last-child {
      margin-bottom: ${(props) => (props.column ? +props.space + 30 + 'px' : 0)};
    }
  }
`;
export const NavWrap = styled(Flex)`
  max-width: ${(props) => (props.agency ? '507px' : '270px')};
  width: 100%;
  
  display: ${(props) => ((!props.agency || props.window < 1151) ? 'none' : 'flex')};
`;
