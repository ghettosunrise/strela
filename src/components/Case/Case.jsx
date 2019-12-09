import React from "react"
import Flex from "../../styled/flex"
import * as S from "./styles"
import { Link } from "gatsby"

const Case = ({ justify, size, children, sublabel, description, img }) => {
  return (
    <S.StyledCase justify={justify} size={size}>
      <Flex row>
        <Flex>
          <Link to="/case">
            <S.CaseLabel>{children}</S.CaseLabel>
            <S.CaseSublabel>{sublabel}</S.CaseSublabel>
          </Link>
        </Flex>
        {description ? (
          <S.CaseDescription>{description}</S.CaseDescription>
        ) : null}
      </Flex>
      <Link to="/case">
        <img src={img}></img>
      </Link>
    </S.StyledCase>
  )
}

export default Case
