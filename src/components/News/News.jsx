/* eslint-disable semi */
import React from 'react';
import Fade from 'react-reveal/Fade';

import * as S from './styles';
import Flex from '../../styled/flex';
import Hashtag from '../Hashtag';

const News = ({
  special,
  date,
  description,
  link,
  txt,
  title,
  src,
  size,
  key,
  extraLarge,
  hashtags,
}) =>
  // console.log("hstd", hashtags)

  extraLarge ? (
    <Flex width="100%" align="flex-end">
      <S.MyNews size={size}>
        <Fade>
          <a href={link}>
            <img src={src} />
          </a>
          <a href={link}>
            <S.Title extraLarge={extraLarge}>{title}</S.Title>
          </a>
        </Fade>

        <Flex width="100%" row marginBottom="25px">
          {hashtags.map(({ name, key, value }) => (
            <Hashtag value={value} key={key} text={name} />
          ))}
        </Flex>
        {description && (
          <Fade>
            <S.Description>{description}</S.Description>
          </Fade>
        )}
        <S.Date>{date}</S.Date>
      </S.MyNews>
    </Flex>
  ) : special ? (
    <S.MyNews size={size}>
      <S.Special>
        <Fade>
          <a href={link}>
            <img src={src} />
            <S.SpecialTitle>{title}</S.SpecialTitle>
            <S.SpecialDate>{date}</S.SpecialDate>
          </a>
        </Fade>
      </S.Special>
    </S.MyNews>
  ) : (
    <S.MyNews size={size}>
      <Fade>
        <a href={link}>
          <img src={src} />
        </a>
        <a href={link}>
          <S.Title>{title}</S.Title>
        </a>
      </Fade>

      <Flex width="100%" row marginBottom="25px">
        {hashtags.map(({ name, key, value }) => (
          <Hashtag value={value} key={key} text={name} />
        ))}
      </Flex>
      {description && (
        <Fade>
          <S.Description>{description}</S.Description>
        </Fade>
      )}
      <S.Date>{date}</S.Date>
    </S.MyNews>
  );
export default News;
