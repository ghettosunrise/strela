import React from 'react';
import { Link } from 'gatsby';
import * as S from './styles';

const Social = ({ isMoved, isTop, isBottom, footer }) => (
  <S.SocialTop
    marginRight="21px"
    isMoved={isMoved}
    isTop={isTop}
    isBottom={isBottom}
    footer={footer}
  >
    <a href="tg.com" target="_blank">
      FB
    </a>
    <a href="tg.com" target="_blank">
      IG
    </a>
  </S.SocialTop>
);

export default Social;
