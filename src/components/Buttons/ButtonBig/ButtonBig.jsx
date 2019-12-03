import React from "react"
import * as S from "./styles"
import Flex from "../../../styled/flex"

const ButtonBig = ({ txt }) => {
  return (
    <Flex width="100%" overflow="hidden">
      <S.ButtonTransparent>{txt}</S.ButtonTransparent>
      <S.StyloOne></S.StyloOne>
      <S.StyloTwo></S.StyloTwo>
      <S.StyloThree></S.StyloThree>
      <S.StyloFour></S.StyloFour>
    </Flex>
  )
}

export default ButtonBig
