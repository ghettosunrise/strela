import React from 'react';
import { Link } from 'gatsby';
import * as S from './styles';

const Social = ({
 isMoved, isTop, isBottom, footer 
}) => (
  <S.SocialTop
    marginRight="21px"
    isMoved={isMoved}
    isTop={isTop}
    isBottom={isBottom}
    footer={footer}
  >
    <a
      href="https://www.facebook.com/strela.booking"
      target="_blank"
      rel="noreferrer"
    >
      FB
    </a>
    <a
      href="https://www.instagram.com/strelaagency/
"
      target="_blank"
      rel="noreferrer"
    >
      IG
    </a>
  </S.SocialTop>
);

export default Social;
