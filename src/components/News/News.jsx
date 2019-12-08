import React from "react"
import * as S from "./styles"
import Flex from "../../styled/flex"

const News = ({ description, txt, title, src, size, extraLarge }) => {
  // return (
  //   <S.MyNews size={size}>
  //     <img src={src}></img>
  //     <a href="#">
  //       <S.Title>{title}</S.Title>
  //     </a>
  //     {description ? <S.Description>{description}</S.Description> : null}
  //     <S.Date>22 окт – 2019</S.Date>
  //   </S.MyNews>
  // )

  return extraLarge ? (
    <Flex width="100%" align="flex-end">
      <S.MyNews size={size}>
        <img src={src}></img>
        <a href="#">
          <S.Title extraLarge={extraLarge}>{title}</S.Title>
        </a>
        {description ? <S.Description>{description}</S.Description> : null}
        <S.Date>22 окт – 2019</S.Date>
      </S.MyNews>
    </Flex>
  ) : (
    <S.MyNews size={size}>
      <img src={src}></img>
      <a href="#">
        <S.Title>{title}</S.Title>
      </a>
      {description ? <S.Description>{description}</S.Description> : null}
      <S.Date>22 окт – 2019</S.Date>
    </S.MyNews>
  )
}

export default News
