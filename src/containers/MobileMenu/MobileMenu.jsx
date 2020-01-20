import React from "react"
import Nav from "../../containers/Nav"
import * as S from "./styles"

const MobileMenu = ({ isClosedMobile }) => {
  return (
    <S.MobileWrap isClosedMobile={isClosedMobile}>
      <Nav
        agency
        column
        space="4.8vh"
        align="center"
        mobileAlign="flex-start"
      ></Nav>
      <S.SubTitle>Быстрый способ с нами связаться через :</S.SubTitle>
      <S.SocialWrap>
        <S.LinkWrap>
          <S.Tg />
          <a href="#">Telegram</a>
        </S.LinkWrap>
        <S.LinkWrap>
          <S.Fb />
          <a href="#">Messenger</a>
        </S.LinkWrap>
        <S.LinkWrap>
          <S.Mail />
          <a href="#">Email</a>
        </S.LinkWrap>
      </S.SocialWrap>
      <S.SubTitle>Мы в соц сетях </S.SubTitle>
      <S.OneMoreSocial>
        <a href="#">FB</a>
        <a href="#">IG</a>
        <a href="#">TG</a>
      </S.OneMoreSocial>
    </S.MobileWrap>
  )
}

// const MobileMenu = () => <Flex width="100%" background="red"></Flex>

export default MobileMenu
