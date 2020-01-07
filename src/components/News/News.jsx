import React from "react"
import * as S from "./styles"
import Flex from "../../styled/flex"
import Hashtag from "../Hashtag"

const News = ({
  special,
  date,
  description,
  link,
  txt,
  title,
  src,
  size,
  key,
  extraLarge,
  hashtags,
}) => {
  // console.log("hstd", hashtags)

  return extraLarge ? (
    <Flex width="100%" align="flex-end">
      <S.MyNews size={size}>
        <a href={link}>
          <img src={src}></img>
        </a>
        <a href={link}>
          <S.Title extraLarge={extraLarge}>{title}</S.Title>
        </a>
        <Flex width="100%" row marginBottom="25px">
          {hashtags.map(({ name, key, value }) => (
            <Hashtag value={value} key={key} text={name} />
          ))}
        </Flex>
        {description ? <S.Description>{description}</S.Description> : null}
        <S.Date>{date}</S.Date>
      </S.MyNews>
    </Flex>
  ) : special ? (
    <S.MyNews size={size}>
      <S.Special>
        <a href={link}>
          <img src={src}></img>
          <S.SpecialTitle>{title}</S.SpecialTitle>
          <S.SpecialDate>{date}</S.SpecialDate>
        </a>
      </S.Special>
    </S.MyNews>
  ) : (
    <S.MyNews size={size}>
      <a href={link}>
        <img src={src}></img>
      </a>
      <a href={link}>
        <S.Title>{title}</S.Title>
      </a>
      <Flex width="100%" row marginBottom="25px">
        {hashtags.map(({ name, key, value }) => (
          <Hashtag value={value} key={key} text={name} />
        ))}
      </Flex>
      {description ? <S.Description>{description}</S.Description> : null}
      <S.Date>{date}</S.Date>
    </S.MyNews>
  )
}

export default News
