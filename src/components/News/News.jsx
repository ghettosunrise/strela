import React from "react"
import * as S from "./styles"

const News = ({ description, txt, title, src, size }) => {
  return (
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
