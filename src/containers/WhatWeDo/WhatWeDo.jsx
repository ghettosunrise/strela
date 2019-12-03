import React from "react"
import Flex from "../../styled/flex"
import ButtonBlack from "../../components/Buttons/ButtonBlack"
import * as S from "./styles"

const WWBlock = ({ number, title, sub }) => {
  return (
    <Flex maxWidth="49%" width="100%">
      <S.Number>{number}</S.Number>
      <S.BlockTitle>{title}</S.BlockTitle>
      <S.BlockSubtitle>{sub}</S.BlockSubtitle>
    </Flex>
  )
}

const WhatWeDo = () => {
  return (
    <Flex width="100%" paddingAll="60px 49px 72px" row justify="space-between">
      <Flex shrink="1">
        <S.Title>Что мы делаем</S.Title>
        <S.SubTitle>
          Агентство предоставляет услуги от консультации до полной реализации
          стратегии продвижения того или иного электронного проекта
        </S.SubTitle>
        <ButtonBlack txt="Детальнее"></ButtonBlack>
      </Flex>
      <Flex width="54.4%" wrap="wrap" row justify="space-between">
        <WWBlock
          number="01"
          title="PR-им фестивали"
          sub="Пояснение основных моментов в пиаре собственного имени и проектов... "
        ></WWBlock>
        <WWBlock
          number="02"
          title="Консультируем"
          sub="Первую очередь, обсуждение проекта, его позиционирования и концепции."
        ></WWBlock>
        <WWBlock
          number="03"
          title="Повышаем узнаваемость"
          sub="Предварительное обсуждение позиционирования, концепции."
        ></WWBlock>
        <WWBlock
          number="04"
          title="Промоутим релизы, проекты, мероприятия"
          sub="Пояснение основных моментов в пиаре собственного имени и проектов..."
        ></WWBlock>
        <WWBlock
          number="05"
          title="Работаем с имиджем"
          sub="Пояснение основных моментов в пиаре собственного имени и проектов... "
        ></WWBlock>
        <WWBlock
          number="06"
          title="Консультируем"
          sub="Первую очередь, обсуждение проекта, его позиционирования и концепции."
        ></WWBlock>
      </Flex>
    </Flex>
  )
}

export default WhatWeDo
