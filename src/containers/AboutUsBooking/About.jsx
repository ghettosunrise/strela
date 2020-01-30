import React from "react"
import Flex from "../../styled/flex"
import * as S from "./styles"

const AboutUs = () => {
  return (
    <Flex
      width="100%"
      paddingAll="140px 49px 120px"
      tabletPadding="80px 30px 20px"
      mobilePadding="80px 30px 0px"
      background="#FFF"
    >
      <S.Title id="about">About us</S.Title>
      <Flex
        marginTop="50px"
        width="100%"
        row
        justify="space-between"
        tabletDirection="column"
        tabletMargin="0"
        order="2"
      >
        <S.Title>
          Команда агентства Strela уникальна тем, что каждый из основателей
          проекта дополняет другого.
        </S.Title>
        <S.Txt>
          При этом, мы являемся профессионалами в индустрии электронной музыки,
          годами работая на передовой клубного движения, и досконально
          разбираемся в тонкостях этого мира, взаимоотношений и процессов в нем.
        </S.Txt>
        <S.Block></S.Block>
      </Flex>
    </Flex>
  )
}

export default AboutUs
