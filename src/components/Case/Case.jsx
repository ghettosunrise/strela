import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import Flex from '../../styled/flex';
import * as S from './styles';

const LinkWrap = styled(Link)`
  img {
    max-width: 100%;
  }
`;

const Case = ({
  customId,
  id,
  justify,
  position,
  label,
  sublabel,
  description,
  img,
}) => (
  <S.StyledCase justify={justify} position={position}>
    <Flex row>
      <Fade>
        <Flex>
          <Link to={`/promo/case/${customId}`}>
            <Fade>
              <S.CaseLabel>{label}</S.CaseLabel>
              <S.CaseSublabel>{sublabel}</S.CaseSublabel>
            </Fade>
          </Link>
        </Flex>
      </Fade>
      {description ? (
        <S.CaseDescription>{description}</S.CaseDescription>
      ) : null}
    </Flex>
    <Flex width="100%">
      <Fade>
        <LinkWrap className="case__link" to={`/promo/case/${customId}`}>
          <img src={img} />
        </LinkWrap>
      </Fade>
    </Flex>
  </S.StyledCase>
);

export default Case;
