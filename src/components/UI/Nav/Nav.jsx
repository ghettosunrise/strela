import React from "react"
import { Link } from "gatsby"
import * as S from "./styles"

const Nav = () => {
  return (
    <S.TopNav row maxWidth="507px" width="100%" justify="space-between">
      <Link to="/agency/whatwedo">Что мы делаем </Link>
      <Link to="/agency/cases">С кем работаем </Link>
      <Link to="/agency/aboutus">О нас </Link>
      <Link to="/agency/news">Новости </Link>
    </S.TopNav>
  )
}

export default Nav
