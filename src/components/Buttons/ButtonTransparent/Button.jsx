import React from 'react';
import * as S from './styles';
import Flex from '../../../styled/flex';

const ButtonTransparent = ({ type, size, disabled, onClick, txt }) => (
  <Flex overflow="hidden">
    <S.Button type={type} size={size} disabled={disabled} onClick={onClick}>
      {txt}
      <span />
    </S.Button>
    <S.StyloOne small="small" />
    <S.StyloFour small="small" />
  </Flex>

  // <Flex width={width || '100%'}>
  // <Flex width="100%" overflow="hidden">
  //   <S.ButtonTransparent to={link} small={small}>
  //     {txt}
  //   </S.ButtonTransparent>
  //   <S.StyloOne small={small} />
  //   <S.StyloFour small={small} />
  // </Flex>
  // </Flex>
);

export default ButtonTransparent;
