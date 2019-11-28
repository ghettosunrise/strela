import React from "react"
import Flex from "../../styled/flex"
import { Link } from "gatsby"
import * as S from "./styles"
import pic from "../../images/bannerpic.png"

const Banner = ({ title, subtitle, description }) => {
  return (
    <Link to="#">
      <S.Banner>
        <Flex width="32%">
          <S.Title>{title}</S.Title>
          <S.SubTitle>{subtitle}</S.SubTitle>
          <S.Description>{description}</S.Description>
        </Flex>
        <S.Arrow></S.Arrow>
        <Flex shrink="1">
          <img src={pic}></img>
        </Flex>
      </S.Banner>
    </Link>
  )
}

export default Banner
