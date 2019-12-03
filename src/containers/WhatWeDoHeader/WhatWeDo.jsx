import React from "react"
import * as S from "./styles"
import Flex from "../../styled/flex"

const WwdHeader = () => {
  return (
    <Flex width="100%" paddingAll="0 49px">
      <S.Title>
        Агентство предоставляет услуги от консультации до полной реализации
        стратегии продвижения
      </S.Title>
      <S.Description>
        {" "}
        А также консультацию для брендов и помощь с повышением их узнаваемости
        среди аудитории электронной сцены страны.
      </S.Description>
    </Flex>
  )
}

export default WwdHeader
