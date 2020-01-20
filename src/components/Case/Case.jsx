import React from "react"
import Flex from "../../styled/flex"
import * as S from "./styles"
import { Link } from "gatsby"

const Case = ({
  customId,
  id,
  justify,
  size,
  label,
  sublabel,
  description,
  img,
}) => {
  const window = document.documentElement.clientWidth

  return (
    <S.StyledCase justify={justify} size={size}>
      <Flex row>
        <Flex>
          <Link to={`/agency/case/${customId}`}>
            <S.CaseLabel>{label}</S.CaseLabel>
            <S.CaseSublabel>{sublabel}</S.CaseSublabel>
          </Link>
        </Flex>
        {description ? (
          <S.CaseDescription>{description}</S.CaseDescription>
        ) : null}
      </Flex>
      <Link className="case__link" to={`/agency/case/${customId}`}>
        <img src={img}></img>
      </Link>
    </S.StyledCase>
  )
}

export default Case
