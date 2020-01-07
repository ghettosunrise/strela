import React from "react"
import { BlackButton } from "./styles"

export const ButtonBlack = ({ txt, onClick, link }) => {
  return (
    <BlackButton to={link} onClick={onClick}>
      {txt}
      <span></span>
    </BlackButton>
  )
}

export default ButtonBlack
