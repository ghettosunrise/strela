import React from "react"
import * as S from "./styles"

const Arrow = ({ right, left, bottom, top, z }) => {
  return (
    <S.Arrow
      right={right}
      bottom={bottom}
      left={left}
      top={top}
      z={z}
    ></S.Arrow>
  )
}

export default Arrow
