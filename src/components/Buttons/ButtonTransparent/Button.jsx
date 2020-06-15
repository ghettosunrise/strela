import React from 'react';
import * as S from './styles';

const ButtonTransparent = ({ type, size, disabled, onClick, txt }) => (
  <S.Button type={type} size={size} disabled={disabled} onClick={onClick}>
    {txt}
    <span />
  </S.Button>
);

export default ButtonTransparent;
