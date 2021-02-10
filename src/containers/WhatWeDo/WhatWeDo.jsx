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

const WhatWeDo = ({ language }) => {
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
          <S.Title>
            {language === 'RUS' ? 'Что мы делаем' : 'What we do'}
          </S.Title>
        </Fade>
        {/* <Fade>
          <S.SubTitle>
            Агентство предоставляет услуги от консультации до полной реализации
            стратегии продвижения того или иного электронного проекта
          </S.SubTitle>
        </Fade> */}

        {window >= 1150 ? (
          <ButtonBlack
            link="/promo/whatwedo"
            bgColor="white"
            txt={language === 'RUS' ? 'Детальнее' : 'More'}
          />
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
          title={language === 'RUS' ? 'Консультируем' : 'Consulting'}
          sub={
            language === 'RUS'
              ? 'Самый быстрый способ получить ответы на вопросы, связанные с вашим проектом или событием.'
              : 'The fastest way to get answers to questions related to promoting your project or event.'
          }
        />
        <WWBlock
          number="02"
          title={language === 'RUS' ? 'Ведем' : 'PR Support'}
          sub={
            language === 'RUS'
              ? 'Берем на себя промо электронных проектов, релизов или вечеринок.'
              : 'We carry out the promotion of electronic music projects, releases, or events.'
          }
        />
        <WWBlock
          number="03"
          title={language === 'RUS' ? 'Запускаем' : 'Launch'}
          sub={
            language === 'RUS'
              ? 'Продумываем и реализовываем грамотный старт и промо вашего проекта.'
              : 'We devise and implement a thought-through launch and promotion of your project or location.'
          }
        />
        <WWBlock
          number="04"
          title={language === 'RUS' ? 'Делаем Публикации' : 'Work With Media'}
          sub={
            language === 'RUS'
              ? 'Организовываем эксклюзивные материалы в локальные и иностранные тематические СМИ'
              : 'We ensure publicity and exclusive material published in both local and foreign media.'
          }
        />
        <WWBlock
          number="05"
          title="HR"
          sub={
            language === 'RUS'
              ? 'Находим и обучаем PR-менеджера для проектов, либо полностью курируем его работу со своей стороны. '
              : 'We recruit and train a PR manager to manage your projects, or supervise his or her work directly.'
          }
        />
        <WWBlock
          number="06"
          title={
            language === 'RUS' ? 'Бренды и Спонсоры' : 'Brands and Sponsorship'
          }
          sub={
            language === 'RUS'
              ? 'Разрабатываем для брендов годные коммуникационные кампании на аудиторию электронной сцены.'
              : 'We develop suitable communication campaigns that target the electronic music audience.'
          }
        />
        {window < 1150 ? (
          <ButtonBlack
            link="/promo/whatwedo"
            txt={language === 'RUS' ? 'Детальнее' : 'More'}
          />
        ) : null}
      </Flex>
    </Flex>
  );
};

export default WhatWeDo;
