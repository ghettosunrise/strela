import React from "react"
import Flex from "../../styled/flex"
import * as S from "./styles"
import { Link } from "gatsby"

const Case = ({ id, justify, size, label, sublabel, description, img }) => {
  return (
    <S.StyledCase justify={justify} size={size}>
      <Flex row>
        <Flex>
          <Link to="/case">
            <S.CaseLabel>{label}</S.CaseLabel>
            <S.CaseSublabel>{sublabel}</S.CaseSublabel>
          </Link>
        </Flex>
        {description ? (
          <S.CaseDescription>{description}</S.CaseDescription>
        ) : null}
      </Flex>
      <Link to={`agency/case?caseId=${id}`}>
        <img src={img}></img>
      </Link>
    </S.StyledCase>
  )
}

export default Case
