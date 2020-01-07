import React from "react"
import * as S from "./styles"

const Hashtag = ({ text, link, value, bottom }) => {
  return (
    <S.MyHashtag bottom={bottom} to={`/agency/news/${text}`}>
      {`#` + text}
    </S.MyHashtag>
  )
}

export default Hashtag
