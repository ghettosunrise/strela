import React from "react"
import Flex from "../../styled/flex"
import Header from "../Header"
import * as H from "../../styled/header"
import Nav from "../Nav"
import { Link } from "gatsby"
import Social from "../../components/Social"
import * as S from "./styles"
import Arrow from "../../components/Icons"
import ButtonBlack from "../../components/Buttons/ButtonBlack"

const MainTitle = ({ txt }) => {
  return <S.MyMainTitle>{txt}</S.MyMainTitle>
}

const AgencyHeader = ({ isClosed, setIsClosed }) => {
  return (
    <Flex width="100%" paddingAll="46px 49px 0">
      <Flex
        row
        justify="space-between"
        align="center"
        width="100%"
        marginBottom="65px"
      >
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
        <Nav row></Nav>
        <Flex row align="center" maxWidth="323px" width="100%">
          <Social />
          <ButtonBlack txt="Связаться" onClick={() => setIsClosed(false)} />
        </Flex>
      </Flex>
      <Flex maxWidth="1058px" width="100%" justify="space-between" row>
        <Flex>
          <Nav column space="20"></Nav>
          <Social></Social>
        </Flex>
        <MainTitle txt="Мы PR агенство, которое поможет узнать тебя во всем мире!" />
      </Flex>
    </Flex>
  )
}

export default AgencyHeader
