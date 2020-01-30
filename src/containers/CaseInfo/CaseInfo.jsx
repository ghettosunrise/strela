import React from "react"
import * as S from "./styles"
import Flex from "../../styled/flex"

const CaseInfo = ({
  titleFirst,
  titleSecond,
  textFirst,
  textSecond,
  imgDesc1,
  imgDesc2,
  imgSrc1,
  imgSrc2,
}) => {
  return (
    <Flex
      width="100%"
      paddingAll="0 49px"
      tabletPadding="0 30px"
      mobilePadding="0 20px"
    >
      <S.TxtContainer>
        <S.Text>{textFirst}</S.Text>
        <S.Title>{titleFirst}</S.Title>
      </S.TxtContainer>
      <Flex width="100%" justify="space-between" row>
        <S.ImgWrap shrink="1" marginRight="1%">
          <img src={imgSrc1} alt={imgDesc1}></img>
          <S.ImgDesc>{imgDesc1}</S.ImgDesc>
        </S.ImgWrap>
        <S.ImgWrap shrink="1">
          <img src={imgSrc2} alt={imgDesc2}></img>
          <S.ImgDesc>{imgDesc2}</S.ImgDesc>
        </S.ImgWrap>
      </Flex>
      <S.TxtContainer>
        <S.Title>{titleSecond}</S.Title>
        <S.Text>{textSecond}</S.Text>
      </S.TxtContainer>
    </Flex>
  )
}

export default CaseInfo
