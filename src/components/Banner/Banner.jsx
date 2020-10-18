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
  descriptionEng,
  link,
  news,
  cases,
  image,
  hashtags,
  page,
  language,
}) => {
  const isRus = language === 'RUS';

  return (
    <Flex
      width="100%"
      paddingAll="0px 49px"
      tabletPadding="0 30px"
      mobilePadding="0 20px"
      background={page === 'cases' || page === 'news' ? 'black' : null}
    >
      {link && (
        <Link href="#">
          <S.Banner link={link} cases={cases} news={news}>
            <Flex width="32%">
              <Fade>
                <S.Title>{title}</S.Title>
                <S.SubTitle>{subtitle}</S.SubTitle>
                <S.Description>
                  {isRus ? description : descriptionEng}
                </S.Description>
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
            <S.NewsTitle language={language}>{title}</S.NewsTitle>
          </Fade>
          <Fade>
            <S.NewsDescription>{description}</S.NewsDescription>
          </Fade>
        </S.NewsBanner>
      )}
      {cases && (
        <S.CaseBanner mobileDirection="column">
          <Flex
            shrink="1"
            marginRight="40px"
            justify="space-between"
            mobileDirection="column"
          >
            <S.CaseTitle>{title}</S.CaseTitle>
            <S.CaseDescription>{description}</S.CaseDescription>
            <Flex width="100%">
              <S.Line />
              <Flex
                width="100%"
                row
                justify="space-between"
                align="flex-end"
                mobileDirection="column"
                mobileAlign="flex-start"
              >
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
};

export default Banner;
