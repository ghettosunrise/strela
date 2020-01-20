import React from "react"
import { BlackButton, BlackButtonLink } from "./styles"

export const ButtonBlack = ({ txt, onClick, link }) => {
  return (
    <>
      {link ? (
        <BlackButtonLink to={link}>
          {txt}
          <span></span>
        </BlackButtonLink>
      ) : (
        <BlackButton onClick={onClick}>
          {txt}
          <span></span>
        </BlackButton>
      )}
    </>
  )
}

export default ButtonBlack
