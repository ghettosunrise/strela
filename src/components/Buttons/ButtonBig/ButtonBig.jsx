import React from "react"
import * as S from "./styles"
import Flex from "../../../styled/flex"

const ButtonBig = ({ link, txt, small, big, width }) => {
  return (
    <Flex width={width || "100%"}>
      <Flex width="100%" overflow="hidden">
        <S.ButtonTransparent to={link} small={small}>
          {txt}
        </S.ButtonTransparent>
        <S.StyloOne small={small}></S.StyloOne>
        <S.StyloTwo small={small}></S.StyloTwo>
        <S.StyloThree small={small}></S.StyloThree>
        <S.StyloFour small={small}></S.StyloFour>
      </Flex>
    </Flex>
  )
}

export default ButtonBig
