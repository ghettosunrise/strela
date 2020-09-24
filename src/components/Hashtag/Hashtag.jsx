import React from 'react';
import * as S from './styles';

const Hashtag = ({ text, link, value, bottom, color }) => (
  <S.MyHashtag color={color} bottom={bottom} to={`/promo/news/${value}`}>
    {`#${text}`}
  </S.MyHashtag>
);

export default Hashtag;
