import React from "react"
import Flex from "../../styled/flex"
import * as H from "../../styled/header"
import Nav from "../Nav"
import * as S from "./styles"
import Arrow from "../../components/Icons"
import { Link } from "gatsby"
import Button from "../../components/Buttons/ButtonTransparent"
import Ticker from "../../components/Ticker"

import logo from "../../images/bookinglogo.svg"

const BookingHeader = ({ isClosed, setIsClosed }) => {
  return (
    <Flex width="100%">
      <S.HeaderWrap>
        <Flex
          row
          maxWidth="656px"
          width="100%"
          justify="space-between"
          align="center"
        >
          <H.HeaderLogoWrap
            row
            align="center"
            justify="space-between"
            width="274px"
          >
            <Link to="/"></Link>
            <Arrow direction="R" />
          </H.HeaderLogoWrap>
          <Nav row />
        </Flex>
        <Button txt="Booking Form" onClick={() => setIsClosed(false)} />
      </S.HeaderWrap>
      <Ticker />
      <Flex width="100%" paddingAll="90px 49px 0" row>
        <img src={logo}></img>
        <S.Title>
          We represent a wide range of artists that produce electronic music
        </S.Title>
      </Flex>
    </Flex>
  )
}

export default BookingHeader
