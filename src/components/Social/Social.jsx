import React from "react"
import { Link } from "gatsby"
import * as S from "./styles"

const Social = () => {
  return (
    <S.SocialTop marginRight="21px">
      <Link to="tg.com">FB</Link>
      <Link to="tg.com">IG</Link>
      <Link to="tg.com">TG</Link>
    </S.SocialTop>
  )
}

export default Social
