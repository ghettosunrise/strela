import React from "react"
import Flex from "../../styled/flex"
import * as S from "./styles"
import alisa from "../../images/alisa.png"
import dima from "../../images/dima.png"

const AboutUs = () => {
  return (
    <Flex width="100%" paddingAll="0 49px 150px" tabletPadding="0 35px 60px">
      <Flex width="100%">
        <S.Title>
          Команда агентства Strela уникальна тем, что каждый из основателей
          проекта дополняет другого
        </S.Title>
        <S.Descritpion>
          При этом, мы являемся профессионалами в индустрии электронной музыки,
          годами работая на передовой клубного движения, и досконально
          разбираемся в тонкостях этого мира, взаимоотношений и процессов в нем.{" "}
        </S.Descritpion>
        <S.DecorItem />
      </Flex>
      <Flex width="100%">
        <S.Hero>
          <img src={alisa}></img>
          <Flex shrink="1">
            <S.HeroTitle>Алиса Мален</S.HeroTitle>
            <S.HeroSubtitle>
              Один из главных специалистов по пиару в клубной сфере Украины,
              пиар-директор ведущего киевского клуба Closer, основных украинских
              фестивалей Strichka и Brave! Factory
            </S.HeroSubtitle>
            <S.HeroDescription>
              практикующий частный пиар-консультант с 10-летним стажем. Ее часто
              можно встретить выступающей с лекциями по пиару, продвижению,
              копирайтингу и работе со СМИ, а также помогающей тем или иным
              субъектам ночной жизни и культурного досуга повышать узнаваемость
              и развивать их проекты.
            </S.HeroDescription>
            <Flex width="100%" row>
              <S.LinkWrap>
                <p>in social media</p>
                <a href="#">fb</a>
                <a href="#">tg</a>
              </S.LinkWrap>
              <S.LinkWrap>
                <p>email</p>
                <a href="#">AlisaMullen@strela.com</a>
              </S.LinkWrap>
            </Flex>
          </Flex>
        </S.Hero>
        <S.Hero alignSelf="flex-end" marginRight="50px">
          <img src={dima}></img>
          <Flex shrink="1">
            <S.HeroTitle>Дмитрий Игнатьев</S.HeroTitle>
            <S.HeroSubtitle>
              музыкальный журналист, пишущий об электронной музыке около 15 лет,
              а увлекающийся ею с 1993 года. Один из основателей российского
              Mixmag.
            </S.HeroSubtitle>
            <S.HeroDescription>
              А так же печатного журнала Sensor, автор телеграм-канала о клубной
              музыке “МиР”, в прошлом ведущий нескольких программ об электронной
              музыке на радио, которого иногда даже можно встретить за
              диджейскими вертушками в клубе. Дмитрий обладает обширными
              знаниями об истории электронной музыки и устройстве клубной
              индустрии сегодня.
            </S.HeroDescription>
            <Flex width="100%" row>
              <S.LinkWrap>
                <p>in social media</p>
                <a href="#">fb</a>
              </S.LinkWrap>
              <S.LinkWrap>
                <p>email</p>
                <a href="#">DIgnatiev@strela.com</a>
              </S.LinkWrap>
            </Flex>
          </Flex>
        </S.Hero>
        <S.BottomTxt1>
          Мы стремимся развивать клубную индустрию Украины, чтобы ее уровень
          соответствовал принятым во всем мире высоким стандартам
        </S.BottomTxt1>
        <S.BottomTxt2>
          При этом, мы являемся профессионалами в индустрии электронной музыки,
          годами работая на передовой клубного движения, и досконально
          разбираемся в тонкостях этого мира, взаимоотношений и процессов в нем.
        </S.BottomTxt2>
      </Flex>
    </Flex>
  )
}

export default AboutUs
