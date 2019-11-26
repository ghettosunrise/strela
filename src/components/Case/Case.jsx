import React from "react"
import Flex from "../../styled/flex"
import * as S from "./styles"
import { Link } from "gatsby"

const Case = props => {
  return (
    <S.StyledCase justify={props.justify} size={props.size}>
      <Flex row>
        <Flex>
          <Link to="#">
            <S.CaseLabel>{props.label}</S.CaseLabel>
            <S.CaseSublabel>{props.sublabel}</S.CaseSublabel>
          </Link>
        </Flex>
        {props.description ? (
          <S.CaseDescription>{props.description}</S.CaseDescription>
        ) : null}
      </Flex>
      <Link to="#">
        <img src={props.img}></img>
      </Link>
    </S.StyledCase>
  )
}

export default Case
