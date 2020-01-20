import React, { useState, useRef, useEffect } from "react"
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
  const scrollContainer = useRef()

  const [isMoved, setIsMoved] = useState(false)

  useEffect(() => {
    function handleScroll(e) {
      document?.scrollingElement?.scrollTop > 0
        ? setIsMoved(true)
        : document?.scrollingElement?.scrollTop === 0
        ? setIsMoved(false)
        : console.log("something wrong")
    }

    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  console.log(isClosedMobile)
  return (
    <>
      {" "}
      <Flex
        width="100%"
        paddingAll="46px 49px 0"
        tabletPadding="46px 30px 0"
        mobilePadding="46px 20px 0"
        z="12"
        ref={scrollContainer}
      >
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

          {window >= 1150 ? (
            <>
              <Nav isMoved={isMoved} isTop={true} agency row></Nav>
              <Flex row align="center" maxWidth="323px" width="100%">
                <Social isMoved={isMoved} isTop={true} />
                <ButtonBlack
                  txt="Связаться"
                  onClick={() => setIsClosed(false)}
                />
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
      </Flex>
      <Flex
        maxWidth="1058px"
        width="100%"
        justify="space-between"
        row
        paddingAll="146px 49px 0"
        tabletPadding="96px 0 0"
        mobilePadding="65px 0 0"
      >
        {window >= 1150 ? (
          <Flex>
            <Nav
              isMoved={isMoved}
              isBottom={true}
              agency
              column
              space="20px"
            ></Nav>
            <Social isMoved={isMoved} isBottom={true}></Social>
          </Flex>
        ) : null}

        <MainTitle
          isClosedMobile={isClosedMobile}
          txt="Мы PR агенство, которое поможет узнать тебя во всем мире!"
        />
      </Flex>
    </>
  )
}

export default AgencyHeader
