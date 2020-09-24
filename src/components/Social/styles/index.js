/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
import styled from 'styled-components';
import Flex from '../../../styled/flex';

export const SocialTop = styled(Flex)`
  max-width: 58px;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  transition: opacity 0.3s ease;
  opacity: ${props =>
    props.isMoved === false && props.isTop === true
      ? 0
      : props.isMoved === true && props.isBottom === true
      ? 0
      : 1};

  @media only screen and (max-width: 768px) {
    // eslint-disable-next-line prettier/prettier
    margin: ${props => (props.footer ? '60px 0' : null)};
  }

  a {
    font-family: Neue Machina;
    font-size: 13px;
    line-height: 13px;
    letter-spacing: 0.06em;
    text-decoration-line: underline;
    text-transform: uppercase;
    font-weight: 900;
    color: #000000;
  }
`;
