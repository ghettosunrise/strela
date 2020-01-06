import React from "react"
import * as S from "./styles"

const Burger = ({ onClick, isClosedMobile, setIsClosedMobile }) => {
  return (
    <S.BurgerButton
      isClosedMobile={isClosedMobile}
      onClick={onClick}
      setIsClosedMobile={setIsClosedMobile}
    ></S.BurgerButton>
  )
}

export default Burger
