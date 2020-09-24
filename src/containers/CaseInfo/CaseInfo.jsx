import React from 'react';
import * as S from './styles';
import Flex from '../../styled/flex';

const CaseInfo = ({
  titleFirst,
  titleSecond,
  textFirst,
  textSecond,
  imgDesc1,
  imgDesc2,
  imgSrc1,
  imgSrc2,
}) => (
  <Flex
    width="100%"
    marginTop="100px"
    paddingAll="0 49px"
    tabletPadding="0 30px"
    mobilePadding="0 20px"
  >
    <S.TxtContainer>
      <S.Text>{textFirst}</S.Text>
      <S.Title>{titleFirst}</S.Title>
    </S.TxtContainer>
    <Flex width="100%" justify="space-between" row>
      {imgSrc1 && (
        <S.ImgWrap shrink="0" marginRight="1%">
          <img src={imgSrc1} alt={imgDesc1} />
          <S.ImgDesc>{imgDesc1}</S.ImgDesc>
        </S.ImgWrap>
      )}
      {imgSrc2 && (
        <S.ImgWrap grow="1">
          <img src={imgSrc2} alt={imgDesc2} />
          <S.ImgDesc>{imgDesc2}</S.ImgDesc>
        </S.ImgWrap>
      )}
    </Flex>
    {/* <S.TxtContainer>
      <S.Title>{titleSecond}</S.Title>
      <S.Text>{textSecond}</S.Text>
    </S.TxtContainer> */}
  </Flex>
);

export default CaseInfo;
