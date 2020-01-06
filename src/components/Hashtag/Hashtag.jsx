import React from "react"
import * as S from "./styles"

const Hashtag = ({ text, link, value }) => {
  return <S.MyHashtag to={`/agency/news/${text}`}>{`#` + text}</S.MyHashtag>
}

export default Hashtag
