import React from "react"
import { BlackButton } from "./styles"

export const ButtonBlack = ({ txt, onClick }) => {
  return (
    <BlackButton onClick={onClick}>
      {txt}
      <span></span>
    </BlackButton>
  )
}

export default ButtonBlack
