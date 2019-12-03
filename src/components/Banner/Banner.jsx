import React from "react"
import Flex from "../../styled/flex"
import { Link } from "gatsby"
import * as S from "./styles"
import pic from "../../images/bannerpic.png"
import casepic from "../../images/opencaseimg.png"

const Banner = ({ title, subtitle, description, link, news, cases }) => {
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
              <img src={pic}></img>
            </Flex>
          </S.Banner>
        </Link>
      ) : news ? (
        <S.NewsBanner>
          <S.NewsTitle>{title}</S.NewsTitle>
          <S.NewsDescription>{description}</S.NewsDescription>
        </S.NewsBanner>
      ) : cases ? (
        <S.CaseBanner>
          <Flex maxWidth="32.5%" width="100%">
            <S.CaseTitle>{title}</S.CaseTitle>
            <S.CaseDescription>{description}</S.CaseDescription>
          </Flex>
          <img src={casepic}></img>
        </S.CaseBanner>
      ) : null}
    </Flex>
  )
}

export default Banner
