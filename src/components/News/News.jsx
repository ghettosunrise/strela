/* eslint-disable semi */
import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import * as S from './styles';
import Flex from '../../styled/flex';
import Hashtag from '../Hashtag';

const ExtraLargeWrap = styled(Flex)`
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const News = ({
  special,
  date,
  mainPage,
  description,
  link,
  txt,
  title,
  src,
  size,
  key,
  extraLarge,
  hashtags,
  caseNews,
  position,
}) => {
  if (extraLarge) {
    return (
      <ExtraLargeWrap width={mainPage ? '50%' : '100%'} align="flex-end">
        <S.MyNews mainPage={mainPage} size={size}>
          <Fade>
            <a target="_blank" href={link}>
              <img src={src} />
            </a>
            <a target="_blank" href={link}>
              <S.Title extraLarge={extraLarge}>{title}</S.Title>
            </a>
          </Fade>

          <Flex width="100%" row wrap="wrap" marginBottom="20px">
            {hashtags.map(({ name, key, value }) => (
              <Hashtag bottom="5px" value={value} key={key} text={name} />
            ))}
          </Flex>
          {description && (
            <Fade>
              <S.Description>{description}</S.Description>
            </Fade>
          )}
          <S.Date>{date}</S.Date>
        </S.MyNews>
      </ExtraLargeWrap>
    );
  }

  if (special) {
    return (
      <S.MyNews mainPage={mainPage} position={position} size={size}>
        <S.Special>
          <Fade>
            <a target="_blank" href={link}>
              <img src={src} />
              <S.SpecialTitle>{title}</S.SpecialTitle>
              <S.SpecialDate>{date}</S.SpecialDate>
            </a>
          </Fade>
        </S.Special>
      </S.MyNews>
    );
  }

  if (size === 'big' && mainPage) {
    return (
      <Flex width="100%" align="flex-end" order={position}>
        <S.MyNews mainPage={mainPage} position={position} size="medium">
          <Fade>
            <a target="_blank" href={link}>
              <img style={{ maxWidth: '100%' }} src={src} />
            </a>
            <a target="_blank" href={link}>
              <S.TitleBig>{title}</S.TitleBig>
            </a>
          </Fade>

          <S.Date>{date}</S.Date>
        </S.MyNews>
      </Flex>
    );
  }

  return (
    <S.MyNews
      mainPage={mainPage}
      position={position}
      size={caseNews ? 'small' : size}
    >
      <Fade>
        <a target="_blank" href={link}>
          <img style={{ maxWidth: '100%' }} src={src} />
        </a>
        <a target="_blank" href={link}>
          <S.Title>{title}</S.Title>
        </a>
      </Fade>

      <Flex width="100%" row marginBottom="20px" wrap="wrap">
        {hashtags.map(({ name, key, value }) => (
          <Hashtag bottom="5px" value={value} key={key} text={name} />
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

  // extraLarge ? (

  // ) : special ? (

  // ) : (

  // );
};
export default News;
