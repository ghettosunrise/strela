import React, { useState } from "react"
import Flex from "../../styled/flex"
import * as S from "./styles"

const Services = () => {
  const [activeService, setActiveService] = useState(0)

  const [switchService, setSwitchService] = useState(0)

  return (
    <Flex
      width="100%"
      paddingAll="0 49px 150px"
      tabletPadding="0 30px 80px"
      mobilePadding="0 20px 80px"
    >
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
          <>
            <p>организаторам</p>
            <Flex
              width="100%"
              row
              justify="space-between"
              mobileDirection="column"
            >
              <Flex width="19.6%" mobileMargin="0 0 40px" mobileWidth="100%">
                <S.Txt onClick={() => setSwitchService(0)}>Консультация</S.Txt>
                <S.Txt onClick={() => setSwitchService(1)}>
                  Промо релизов/ <br /> проектов/мероприятий
                </S.Txt>
                <S.Txt onClick={() => setSwitchService(2)}>
                  Повышение узнаваемости
                </S.Txt>
              </Flex>
              {switchService === 0 ? (
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
              ) : switchService === 1 ? (
                <S.ServiceContent>
                  <S.Title>Other</S.Title>
                  <S.List>
                    <li>
                      Пояснение основных моментов в пиаре собственного имени и
                      проектов;
                    </li>
                    <li>Обсуждение позиционирования и концепции;</li>
                    <li>Объяснение принципов продвижения в целом;</li>
                  </S.List>
                </S.ServiceContent>
              ) : (
                <S.ServiceContent>
                  <S.Title>Other 2</S.Title>
                  <S.List>
                    <li>
                      Пояснение основных моментов в пиаре собственного имени и
                      проектов;
                    </li>
                    <li>Обсуждение позиционирования и концепции;</li>
                    <li>Объяснение принципов продвижения в целом;</li>
                  </S.List>
                </S.ServiceContent>
              )}
            </Flex>
          </>
        ) : (
          <>
            <p>Артистам</p>
            <Flex
              width="100%"
              row
              justify="space-between"
              mobileDirection="column"
            >
              <Flex width="19.6%" mobileMargin="0 0 40px" mobileWidth="100%">
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
          </>
        )}
      </Flex>
    </Flex>
  )
}

export default Services
