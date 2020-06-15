import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';

import Flex from '../../styled/flex';
import * as S from './styles';

const Case = ({
  customId,
  id,
  justify,
  size,
  label,
  sublabel,
  description,
  img,
}) => (
  <S.StyledCase justify={justify} size={size}>
    <Flex row>
      <Fade>
        <Flex>
          <Link to={`/agency/case/${customId}`}>
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
        <Link className="case__link" to={`/agency/case/${customId}`}>
          <img src={img} />
        </Link>
      </Fade>
    </Flex>
  </S.StyledCase>
);

export default Case;
