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

const BookingHeader = ({ isClosed, setIsClosed, main }) => {
  return (
    <Flex width="100%" z="2">
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
      {main ? (
        <Flex
          width="100%"
          paddingAll="90px 49px 0"
          tabletPadding="90px 30px 0"
          mobilePadding="70px 20px 0"
          mobileDirection="column"
          mobileAlign="center"
          row
        >
          <img className="myImg" src={logo}></img>
          <S.Title>
            We represent a wide range of artists that produce electronic music
          </S.Title>
        </Flex>
      ) : null}
    </Flex>
  )
}

export default BookingHeader
