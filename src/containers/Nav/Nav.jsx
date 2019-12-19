import React from "react"
import { Link } from "gatsby"

import * as S from "./styles"

const Nav = ({ row, column, space, agency }) => {
  console.log(agency)

  return (
    <S.NavWrap agency={agency}>
      {agency ? (
        <S.TopNav
          row={row && true}
          column={column && true}
          width="100%"
          justify="space-between"
          space={space}
        >
          <Link to="/agency/whatwedo">Что мы делаем </Link>
          <Link to="/agency/cases">С кем работаем </Link>
          <Link to="/agency/aboutus">О нас </Link>
          <Link to="/agency/news">Новости </Link>
        </S.TopNav>
      ) : (
        <S.TopNav
          row={row && true}
          column={column && true}
          width="100%"
          justify="space-between"
          space={space}
        >
          <Link to="/booking/#artists">Artists</Link>
          <Link to="/booking/#news">News</Link>
          <Link to="/booking/#about">About Us</Link>
        </S.TopNav>
      )}
    </S.NavWrap>
  )
}

export default Nav
