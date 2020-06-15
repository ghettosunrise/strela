import React from 'react';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import * as S from './styles';

const Nav = ({
  row,
  align,
  column,
  space,
  agency,
  scrollY,
  isBottom,
  isTop,
  isMoved,
  window,
  booking,
}) => (
  <S.NavWrap agency={agency} window={window}>
    {agency ? (
      <S.TopNav
        row={row && true}
        column={column && true}
        width="100%"
        justify="space-between"
        space={space}
        align={align}
        isBottom={isBottom}
        isTop={isTop}
        isMoved={isMoved}
      >
        <Link to="/agency/whatwedo" activeClassName="active">
          Что мы делаем
        </Link>
        <Link to="/agency/cases" activeClassName="active">
          С кем работаем
        </Link>
        <Link to="/agency/aboutus" activeClassName="active">
          О нас
        </Link>
        <Link to="/agency/news" activeClassName="active">
          Материалы
        </Link>
      </S.TopNav>
    ) : (
      <S.TopNav
        row={row && true}
        column={column && true}
        width="100%"
        justify="space-between"
        space={space}
      >
        <span onClick={() => scrollTo('#artists')}>Artists</span>
        <span onClick={() => scrollTo('#news')} to="/booking/#news">
          News
        </span>
        <span onClick={() => scrollTo('#about')} to="/booking/#about">
          About Us
        </span>
      </S.TopNav>
    )}
    {}
  </S.NavWrap>
);

export default Nav;
