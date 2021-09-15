import React from 'react';
import * as S from './styles';
import Flex from '../../../styled/flex';

const ButtonBlue = ({ pressKit }) => {
  console.log(
    '🚀 ~ file: ButtonBlue.jsx ~ line 6 ~ ButtonBlue ~ pressKit',
    pressKit
  );

  const { url } = pressKit.file;

  return (
    <Flex role="button" overflow="hidden">
      <S.Button target="_blank" href={url}>
        Presskit
      </S.Button>
      <S.StyloOne small="small" />
      <S.StyloFour small="small" />
    </Flex>
  );
};

export default ButtonBlue;
