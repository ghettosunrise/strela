import React, { useState } from "react"
import Flex from "../../styled/flex"
import Button from "../../components/Buttons/ButtonBig"
import * as S from "./styles"

const Services = () => {
  const [activeService, setActiveService] = useState(0)

  const [switchService, setSwitchService] = useState(0)

  return (
    <Flex width="100%" paddingAll="0 49px 150px">
      <Flex row marginBottom="60px" width="500px" justify="space-between">
        <Flex width="245px" onClick={() => setActiveService(0)}>
          {activeService === 0 ? (
            <S.NewButton small txt="Организаторам"></S.NewButton>
          ) : (
            <S.InvisButton>Организаторам</S.InvisButton>
          )}
        </Flex>
        <Flex width="245px" onClick={() => setActiveService(1)}>
          {activeService === 1 ? (
            <S.NewButton small txt="Артистам"></S.NewButton>
          ) : (
            <S.InvisButton>Артистам</S.InvisButton>
          )}
        </Flex>
      </Flex>

      <Flex width="100%">
        {activeService === 0 ? (
          <Flex width="100%" row justify="space-between">
            <Flex width="19.6%">
              <S.Txt>Консультация</S.Txt>
              <S.Txt>
                Промо релизов/ <br /> проектов/мероприятий
              </S.Txt>
              <S.Txt>Повышение узнаваемости</S.Txt>
            </Flex>
            <S.ServiceContent>
              <S.Title>Консультация</S.Title>
              <S.List>
                <li>
                  Пояснение основных моментов в пиаре собственного имени и
                  проектов;
                </li>
                <li>Обсуждение позиционирования и концепции;</li>
                <li>Объяснение принципов продвижения в целом;</li>
              </S.List>
            </S.ServiceContent>
          </Flex>
        ) : (
          <Flex width="100%" row justify="space-between">
            <Flex width="19.6%">
              <S.Txt>Lorem</S.Txt>
              <S.Txt>
                ipsun/ <br /> проектов/мероприятий
              </S.Txt>
              <S.Txt>Повышение узнаваемости</S.Txt>
            </Flex>
            <S.ServiceContent>
              <S.Title>Lorem</S.Title>
              <S.List>
                <li>
                  Пояснение основных моментов в пиаре собственного имени и
                  проектов;
                </li>
                <li>Обсуждение позиционирования и концепции;</li>
                <li>Объяснение принципов продвижения в целом;</li>
              </S.List>
            </S.ServiceContent>
          </Flex>
        )}
        ;
      </Flex>
    </Flex>
  )
}

export default Services
