import React, { useState } from "react"
import * as S from "./styles"
import Flex from "../../styled/flex"

const ContactUs = ({ isClosed, setIsClosed }) => {
  // const [isClosed, setIsClosed] = useState(false)

  return (
    <S.Contact isClosed={isClosed}>
      <Flex width="100%" align="flex-end" marginBottom="16.7vh">
        <S.Close onClick={() => setIsClosed(true)}></S.Close>
      </Flex>
      <S.Title>Контакты</S.Title>
      <S.SubTitle>Быстрый способ с нами связаться через :</S.SubTitle>
      <Flex maxWidth="425px" width="100%" row justify="space-between">
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
      </Flex>
      <S.Arrow></S.Arrow>
      <S.BottomTxtWrap>
        <p>
          32 Avenue of the Americas 19th Floor New York, NY 10013 United States
        </p>
        <Flex>
          <a href="tel:#">+46 8 791 40 10</a>
          <a href="mailto:#">info@strela.com </a>
        </Flex>
      </S.BottomTxtWrap>
    </S.Contact>
  )
}

export default ContactUs
