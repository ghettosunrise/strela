import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import Flex from '../../styled/flex';
import ButtonBlack from '../../components/Buttons/ButtonBlack';
import * as S from './styles';

const WWBlock = ({ number, title, sub }) => (
  <S.WWFlex>
    <Fade>
      <S.Number>{number}</S.Number>
    </Fade>
    <Fade>
      <S.BlockTitle>{title}</S.BlockTitle>
    </Fade>
    <Fade>
      <S.BlockSubtitle>{sub}</S.BlockSubtitle>
    </Fade>
  </S.WWFlex>
);

const WhatWeDo = () => {
  const [documentLoaded, setDocumentLoaded] = useState(null);
  let window;

  useEffect(() => {
    setDocumentLoaded(true);
  }, []);

  documentLoaded === true
    ? (window = document.documentElement.clientWidth)
    : null;

  return (
    <Flex
      width="100%"
      marginBottom="140px"
      tabletMargin="0 0 80px"
      paddingAll="60px 49px 72px"
      tabletPadding="40px 30px 53px"
      mobilePadding="40px 20px 53px"
      row
      justify="space-between"
      tabletDirection="column"
      background="#FFF"
    >
      <Flex shrink="1" tabletWidth="100%">
        <Fade>
          <S.Title>Что мы делаем</S.Title>
        </Fade>
        {/* <Fade>
          <S.SubTitle>
            Агентство предоставляет услуги от консультации до полной реализации
            стратегии продвижения того или иного электронного проекта
          </S.SubTitle>
        </Fade> */}

        {window >= 1150 ? (
          <ButtonBlack link="/agency/whatwedo" txt="Детальнее" />
        ) : null}
      </Flex>
      <Flex
        width="54.4%"
        wrap="wrap"
        row
        justify="space-between"
        tabletWidth="100%"
        mobileJustify="center"
      >
        <WWBlock
          number="01"
          title="Консультируем"
          sub="Самый быстрый способ получить ответы на вопросы, связанные с вашим проектом или событием."
        />
        <WWBlock
          number="02"
          title="Ведем"
          sub="Берем на себя промо электронных проектов, релизов или вечеринок."
        />
        <WWBlock
          number="03"
          title="Запускаем"
          sub="Продумываем и реализовываем грамотный старт и промо вашего проекта."
        />
        <WWBlock
          number="04"
          title="Делаем Публикации"
          sub="Организовываем эксклюзивные материалы в локальные и иностранные тематические СМИ"
        />
        <WWBlock
          number="05"
          title="HR"
          sub="Находим и обучаем PR-менеджера для проектов, либо полностью курируем его работу со своей стороны. "
        />
        <WWBlock
          number="06"
          title="Бренды и Спонсоры"
          sub="Разрабатываем для брендов годные коммуникационные кампании на аудиторию электронной сцены."
        />
        {window < 1150 ? (
          <ButtonBlack link="/agency/whatwedo" txt="Детальнее" />
        ) : null}
      </Flex>
    </Flex>
  );
};

export default WhatWeDo;
