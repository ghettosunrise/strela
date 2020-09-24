import React from 'react';
import * as S from './styles';
import Flex from '../../../styled/flex';

const ButtonBlue = ({ pressKit }) => (
  <Flex overflow="hidden">
    <S.Button href={pressKit}>Presskit</S.Button>
    <S.StyloOne small="small" />
    <S.StyloFour small="small" />
  </Flex>
);

export default ButtonBlue;
