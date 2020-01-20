import React from "react"
import * as S from "./styles"

const Hashtag = ({ text, link, value, bottom, color }) => {
  return (
    <S.MyHashtag color={color} bottom={bottom} to={`/agency/news/${value}`}>
      {`#` + text}
    </S.MyHashtag>
  )
}

export default Hashtag
