import React from "react"
import * as S from "./styles"
import Flex from "../../styled/flex"
import src1 from "../../images/closer1.png"
import src2 from "../../images/closer2.png"

const CaseInfo = ({
  titleFirst,
  titleSecond,
  textFirst,
  textSecond,
  imgDesc1,
  imgDesc2,
}) => {
  return (
    <Flex width="100%" paddingAll="0 49px">
      <S.TxtContainer>
        <S.Text>{textFirst}</S.Text>
        <S.Title>{titleFirst}</S.Title>
      </S.TxtContainer>
      <Flex width="100%" justify="space-between" row>
        <Flex shrink="1" marginRight="1%">
          <img src={src1} alt={imgDesc1}></img>
          <S.ImgDesc>{imgDesc1}</S.ImgDesc>
        </Flex>
        <Flex shrink="1">
          <img src={src2} alt={imgDesc2}></img>
          <S.ImgDesc>{imgDesc2}</S.ImgDesc>
        </Flex>
      </Flex>
      <S.TxtContainer>
        <S.Title>{titleSecond}</S.Title>
        <S.Text>{textSecond}</S.Text>
      </S.TxtContainer>
    </Flex>
  )
}

export default CaseInfo
