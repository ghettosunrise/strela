import styled from 'styled-components';
import Flex from '../../../styled/flex';
import {
  MyNews,
  medium,
  mediumSmall,
  small,
  extraSmall,
} from '../../../components/News/styles/index';

export const Title = styled.p`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  /* or 117% */
  margin-bottom: 30px;
  letter-spacing: -0.07em;

  color: #000000;
`;

export const Container = styled(Flex)`
  ${MyNews}:nth-child(1),
  ${MyNews}:nth-child(2) {
    ${() => medium}
  }

  ${MyNews}:nth-child(3),
  ${MyNews}:nth-child(4),
  ${MyNews}:nth-child(5),
  ${MyNews}:nth-child(6) {
    ${() => small}
  }

  ${MyNews}:nth-child(7),
  ${MyNews}:nth-child(8),
  ${MyNews}:nth-child(9),
  ${MyNews}:nth-child(10),
  ${MyNews}:nth-child(11),
  ${MyNews}:nth-child(12) {
    ${() => extraSmall}
  }

  ${MyNews}:nth-child(13),
  ${MyNews}:nth-child(14) {
    ${() => medium}
  }
`;
