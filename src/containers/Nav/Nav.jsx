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
  language,
}) => (
  <S.NavWrap agency={agency} window={window}>
    {agency ? (
      <S.TopNav
        row={row}
        column={column}
        width="100%"
        justify="space-between"
        space={space}
        align={align}
        isBottom={isBottom}
        isTop={isTop}
        isMoved={isMoved}
      >
        <Link to="/promo/whatwedo" activeClassName="active">
          {language === 'RUS' ? 'Что мы делаем' : 'What We Do'}
        </Link>
        <Link to="/promo/clients" activeClassName="active">
          {language === 'RUS' ? 'С кем работаем' : 'Clients'}
        </Link>
        <Link to="/promo/aboutus" activeClassName="active">
          {language === 'RUS' ? 'О нас' : 'About Us'}
        </Link>
        <Link to="/promo/news" activeClassName="active">
          {/* Материалы */}
          {language === 'RUS' ? 'Материалы' : 'News'}
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
