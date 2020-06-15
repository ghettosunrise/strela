import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';

import Flex from '../../styled/flex';
import * as S from './styles';
import Hashtag from '../Hashtag';

const Banner = ({
  title,
  subtitle,
  description,
  link,
  news,
  cases,
  image,
  hashtags,
}) => (
  <Flex
    width="100%"
    paddingAll="0px 49px"
    tabletPadding="0 30px"
    mobilePadding="0 20px"
  >
    {link && (
      <Link href="#">
        <S.Banner link={link} cases={cases} news={news}>
          <Flex width="32%">
            <Fade>
              <S.Title>{title}</S.Title>
              <S.SubTitle>{subtitle}</S.SubTitle>
              <S.Description>{description}</S.Description>
            </Fade>
          </Flex>
          <S.Arrow />
          <Flex shrink="1">
            <Fade>
              <img src={image} />
            </Fade>
          </Flex>
        </S.Banner>
      </Link>
    )}
    {news && (
      <S.NewsBanner>
        <Fade>
          <S.NewsTitle>{title}</S.NewsTitle>
        </Fade>
        <S.Line />
        <Fade>
          <S.NewsDescription>{description}</S.NewsDescription>
        </Fade>
        <S.Ukazateli />
      </S.NewsBanner>
    )}
    {cases && (
      <S.CaseBanner mobileDirection="column">
        <Flex
          shrink="1"
          marginRight="10px"
          justify="space-between"
          mobileDirection="column"
        >
          <S.CaseTitle>{title}</S.CaseTitle>
          <Flex>
            <S.Line />
            <Flex
              width="100%"
              row
              justify="space-between"
              align="flex-end"
              mobileDirection="column"
              mobileAlign="flex-start"
            >
              <S.CaseDescription>{description}</S.CaseDescription>
              <Flex row mobileMargin="20px 0">
                {hashtags.map(({ name, key, value }) => (
                  <Hashtag color="#FFF" value={value} key={key} text={name} />
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <img src={image} />
      </S.CaseBanner>
    )}
  </Flex>
);

export default Banner;
