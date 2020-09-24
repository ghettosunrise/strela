import styled from 'styled-components';
import Flex from '../../../styled/flex';
import {
  MyNews,
  big,
  medium,
  mediumSmall,
  small,
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
  ${MyNews}:nth-child(2),
  ${MyNews}:nth-child(3),
  ${MyNews}:nth-child(4) {
    ${() => mediumSmall}
  }

  ${MyNews}:nth-child(5),
  ${MyNews}:nth-child(6),
  ${MyNews}:nth-child(7),
  ${MyNews}:nth-child(8) {
    ${() => small}
  }

  ${MyNews}:nth-child(9),
  ${MyNews}:nth-child(10),
  ${MyNews}:nth-child(11) {
    ${() => mediumSmall}
  }

  ${MyNews}:nth-child(12),
  ${MyNews}:nth-child(13),
  ${MyNews}:nth-child(14),
  ${MyNews}:nth-child(15) {
    ${() => small}
  }

  ${MyNews}:nth-child(16),
  ${MyNews}:nth-child(17),
  ${MyNews}:nth-child(18) {
    ${() => mediumSmall}
  }

  ${MyNews}:nth-child(19),
  ${MyNews}:nth-child(20),
  ${MyNews}:nth-child(21),
  ${MyNews}:nth-child(22) {
    ${() => small}
  }

  ${MyNews}:nth-child(23),
  ${MyNews}:nth-child(24),
  ${MyNews}:nth-child(25) {
    ${() => mediumSmall}
  }

  ${MyNews}:nth-child(26),
  ${MyNews}:nth-child(27),
  ${MyNews}:nth-child(28),
  ${MyNews}:nth-child(29) {
    ${() => small}
  }

  ${MyNews}:nth-child(30),
  ${MyNews}:nth-child(31),
  ${MyNews}:nth-child(32) {
    ${() => mediumSmall}
  }

  ${MyNews}:nth-child(33),
  ${MyNews}:nth-child(34),
  ${MyNews}:nth-child(35),
  ${MyNews}:nth-child(36) {
    ${() => small}
  }
`;
