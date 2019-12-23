import React from "react"
import * as S from "./styles"

const ButtonTransparent = ({ size, disabled, onClick, txt }) => {
  return (
    <S.Button size={size} disabled={disabled} onClick={onClick}>
      {txt} <span></span>
    </S.Button>
  )
}

export default ButtonTransparent
