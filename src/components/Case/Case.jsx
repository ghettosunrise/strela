import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { useLanguage } from '../../hooks';

import Flex from '../../styled/flex';
import * as S from './styles';

const LinkWrap = styled(Link)`
  img {
    max-width: 100%;
  }
`;

const Case = ({
  customId,
  bannerDescriptionEng,
  bannerDescription,
  caseDescriptionEng,
  caseDescription,
  whatWeDoENG,
  whatWeDoText,
  justify,
  position,
  label,
  sublabel,
  description,
  img,
}) => {
  const [[language, setLanguage]] = useLanguage();

  return (
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
            <img style={{ marginTop: '20px' }} src={img} />
          </LinkWrap>
        </Fade>
      </Flex>
    </S.StyledCase>
  );
};

export default Case;
