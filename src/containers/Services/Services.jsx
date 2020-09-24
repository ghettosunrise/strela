import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from '../../styled/flex';
import * as S from './styles';

const MainTxt = styled.h1`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 96px;
  letter-spacing: -0.07em;
  margin-bottom: 30px;
`;

const SubTxt = styled.h2`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  margin-bottom: 110px;
  letter-spacing: -0.07em;
  max-width: 774px;
`;

const Services = () => {
  const [switchService, setSwitchService] = useState(0);

  return (
    <Flex
      width="100%"
      paddingAll="0 49px 150px"
      tabletPadding="0 30px 80px"
      mobilePadding="0 20px 80px"
    >
      <MainTxt>
        Агентство <br /> предоставляет услуги от консультации
      </MainTxt>
      <SubTxt>
        А также консультацию для брендов и помощь с повышением их узнаваемости
        среди аудитории электронной сцены страны.
      </SubTxt>
      <Flex width="100%">
        <Flex width="100%" row justify="space-between" mobileDirection="column">
          <Flex width="19.6%" mobileMargin="0 0 40px" mobileWidth="100%">
            <S.Txt
              switchService={switchService}
              onClick={() => setSwitchService(0)}
            >
              Артистам
            </S.Txt>
            <S.Txt
              switchService={switchService}
              onClick={() => setSwitchService(1)}
            >
              Организаторам
            </S.Txt>
            <S.Txt
              switchService={switchService}
              onClick={() => setSwitchService(2)}
            >
              Промо группам
            </S.Txt>
          </Flex>
          {switchService === 0 && (
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
          )}
          {switchService === 1 && (
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
          )}
          {switchService === 2 && (
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
      </Flex>
    </Flex>
  );
};

export default Services;
