import React from 'react';
import * as S from './styles';
import Flex from '../../../styled/flex';

const ButtonBlue = () => (
  // const { url } = pressKit.file;

  <Flex role="button" overflow="hidden">
    <S.Button target="_blank">Presskit</S.Button>
    <S.StyloOne small="small" />
    <S.StyloFour small="small" />
  </Flex>
);
export default ButtonBlue;
