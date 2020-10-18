import React from 'react';
import * as S from './styles';
import Flex from '../../../styled/flex';

const ButtonBig = ({ link, txt, small, big, width }) => (
  <Flex role="button" width={width || '100%'}>
    <Flex width="100%" overflow="hidden">
      <S.ButtonTransparent to={link} small={small}>
        {txt}
      </S.ButtonTransparent>
      <S.StyloOne small={small} />
      {/* <S.StyloTwo small={small} /> */}
      {/* <S.StyloThree small={small} /> */}
      <S.StyloFour small={small} />
    </Flex>
  </Flex>
);

export default ButtonBig;
