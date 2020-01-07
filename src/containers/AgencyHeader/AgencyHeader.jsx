import React, { useState, useEffect } from "react"
import Flex from "../../styled/flex"
import * as H from "../../styled/header"
import Nav from "../Nav"
import { Link } from "gatsby"
import Social from "../../components/Social"
import * as S from "./styles"
import Arrow from "../../components/Icons"
import ButtonBlack from "../../components/Buttons/ButtonBlack"
import Burger from "../../components/Buttons/Burger"

const MainTitle = ({ txt }) => {
  return <S.MyMainTitle>{txt}</S.MyMainTitle>
}

const AgencyHeader = ({ setIsClosed, setIsClosedMobile, isClosedMobile }) => {
  const window = document.documentElement.clientWidth

  return (
    <Flex width="100%" paddingAll="46px 49px 0" tabletPadding="46px 30px 0">
      <S.Header>
        <H.HeaderLogoWrap
          maxWidth="219px"
          row
          align="center"
          justify="space-between"
          width="100%"
        >
          <Link to="/"></Link>
          <Arrow direction="R" />
        </H.HeaderLogoWrap>

        {window >= 1130 ? (
          <>
            <Nav agency row></Nav>
            <Flex row align="center" maxWidth="323px" width="100%">
              <Social />
              <ButtonBlack txt="Связаться" onClick={() => setIsClosed(false)} />
            </Flex>
          </>
        ) : (
          <Burger
            onClick={() => {
              isClosedMobile === true
                ? setIsClosedMobile(false)
                : setIsClosedMobile(true)
            }}
            isClosedMobile={isClosedMobile}
            setIsClosedMobile={setIsClosedMobile}
          />
        )}
      </S.Header>
      <Flex
        maxWidth="1058px"
        width="100%"
        justify="space-between"
        row
        paddingTop="146.5px"
        tabletPadding="96px 0 0"
      >
        {window >= 1130 ? (
          <Flex>
            <Nav agency column space="20px"></Nav>
            <Social></Social>
          </Flex>
        ) : null}

        <MainTitle txt="Мы PR агенство, которое поможет узнать тебя во всем мире!" />
      </Flex>
    </Flex>
  )
}

export default AgencyHeader
