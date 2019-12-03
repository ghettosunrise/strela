import React from "react"
import Flex from "../../styled/flex"
import { Link } from "gatsby"
import * as S from "./styles"
import pic from "../../images/bannerpic.png"

const Banner = ({ title, subtitle, description }) => {
  return (
    <Flex width="100%" paddingAll="0px 49px">
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
    </Flex>
  )
}

export default Banner
