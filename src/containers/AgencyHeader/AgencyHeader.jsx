import React from "react"
import Flex from "../../styled/flex"
import Header from "../Header"
import Nav from "../Nav"
import Social from "../../components/Social"
import * as S from "./styles"

const MainTitle = ({ txt }) => {
  return <S.MyMainTitle>{txt}</S.MyMainTitle>
}

const AgencyHeader = () => {
  return (
    <Flex width="100%">
      <Header></Header>
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
