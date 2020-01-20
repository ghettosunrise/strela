import React from "react"
import Flex from "../../styled/flex"
import { Link } from "gatsby"
import * as S from "./styles"
import Hashtag from "../Hashtag"

const Banner = ({
  title,
  subtitle,
  description,
  link,
  news,
  cases,
  image,
  hashtags,
}) => {
  return (
    <Flex width="100%" paddingAll="0px 49px">
      {link ? (
        <Link to="#">
          <S.Banner link={link} cases={cases} news={news}>
            <Flex width="32%">
              <S.Title>{title}</S.Title>
              <S.SubTitle>{subtitle}</S.SubTitle>
              <S.Description>{description}</S.Description>
            </Flex>
            <S.Arrow></S.Arrow>
            <Flex shrink="1">
              <img src={image}></img>
            </Flex>
          </S.Banner>
        </Link>
      ) : news ? (
        <S.NewsBanner>
          <S.NewsTitle>{title}</S.NewsTitle>
          <S.Line />
          <S.NewsDescription>{description}</S.NewsDescription>
          <S.Ukazateli></S.Ukazateli>
        </S.NewsBanner>
      ) : cases ? (
        <S.CaseBanner>
          <Flex shrink="1" marginRight="10px" justify="space-between">
            <S.CaseTitle>{title}</S.CaseTitle>
            <Flex>
              <S.Line />
              <Flex width="100%" row justify="space-between" align="flex-end">
                <S.CaseDescription>{description}</S.CaseDescription>
                <Flex row>
                  {hashtags.map(({ name, key, value }) => (
                    <Hashtag color="#FFF" value={value} key={key} text={name} />
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <img src={image}></img>
        </S.CaseBanner>
      ) : null}
    </Flex>
  )
}

export default Banner
