import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from '../../styled/flex';
import * as S from './styles';
import { useLanguage } from '../../hooks';

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

const Services = props => {
  const [switchService, setSwitchService] = useState(0);
  const [[language, setLanguage]] = useLanguage();

  const isRussian = language === 'RUS';

  return (
    <Flex
      width="100%"
      paddingAll="30px 49px 150px"
      tabletPadding="0 30px 80px"
      mobilePadding="0 20px 80px"
    >
      <MainTxt>
        {language === 'RUS' ? 'Что мы делаем:' : 'What We Do:'}{' '}
      </MainTxt>
      <SubTxt>
        {language === 'RUS'
          ? 'Strela работает с каждым из участников экосистемы электронной индустрии. Мы предоставляем услуги от консультации до полной реализации продвижения электронных проектов — с нуля либо на любом этапе существования.'
          : 'Strela works with every member of the electronic music industry ecosystem. We provide services from consultation to the full implementation of the promotion of electronic music projects - from scratch or at any stage of its happening.'}
      </SubTxt>
      <Flex width="100%">
        <Flex width="100%" row justify="space-between" mobileDirection="column">
          <Flex width="19.6%" mobileMargin="0 0 40px" mobileWidth="100%">
            <S.Txt
              switchService={switchService}
              onClick={() => setSwitchService(0)}
            >
              {/* {isRussian ? '' : ''} */}
              {isRussian ? ' Для артистов:' : 'For artists:'}
            </S.Txt>
            <S.Txt
              switchService={switchService}
              onClick={() => setSwitchService(1)}
            >
              {isRussian ? 'Для площадок:' : 'For venues and locations:'}
            </S.Txt>
            <S.Txt
              switchService={switchService}
              onClick={() => setSwitchService(2)}
            >
              {isRussian ? 'Для промо-групп:' : 'For promo groups: '}
            </S.Txt>
            <S.Txt
              switchService={switchService}
              onClick={() => setSwitchService(3)}
            >
              {isRussian ? 'Для медиа:' : 'For media: '}
            </S.Txt>
            <S.Txt
              switchService={switchService}
              onClick={() => setSwitchService(4)}
            >
              {isRussian ? 'Для брендов:' : 'For brands: '}
            </S.Txt>
            <S.Txt
              switchService={switchService}
              onClick={() => setSwitchService(5)}
            >
              {isRussian ? 'Для институций:' : 'For institutions: '}
            </S.Txt>
          </Flex>
          {switchService === 0 && (
            <S.ServiceContent>
              <S.Title>
                {isRussian
                  ? ' Артисты, при желании продвигать себя, свои проекты и релизы имеют возможность получить от нас полноценную консультацию по пиару и промо. Мы поможем разобраться, как коммуницировать со своей аудиторией, не изменяя своему позиционированию. К нам также можно обратиться непосредственно за помощью в продвижении себя и своих релизов на локальную и мировую аудитории.'
                  : 'Artists, if they wish to promote themselves, their projects, and releases, have the opportunity to receive a full consultation on the topics of PR and promotion. We will help you figure out how to communicate with your audience without changing your positioning. You can also contact us directly for help in matters of promoting yourself and your releases to both a local and global audience.'}
              </S.Title>
            </S.ServiceContent>
          )}
          {switchService === 1 && (
            <S.ServiceContent>
              <S.Title>
                {isRussian
                  ? 'Запуск новых локаций или промо собственных мероприятий. Или же разработка своего бренда и коммуникации, позиционирования места и его аудитории. Наше агентство готово помочь вашему клубу с приобретением узнаваемости среди интересной для ваших мероприятий аудитории.'
                  : 'Opening new locations, promoting your events, or developing your brand and communication, positioning the place and its audience. Our agency is ready to help your club in gaining recognition among the audience that might be interesting for your events.'}
              </S.Title>
            </S.ServiceContent>
          )}
          {switchService === 2 && (
            <S.ServiceContent>
              <S.Title>
                {isRussian
                  ? 'Мы можем начать с консультации, на которой расскажем вам о самых базовых правилах продвижения себя как промо-группы и своих артистов, отталкиваясь от релевантных для вас примеров. Затем мы разберем ваши сильные и индивидуальные стороны, определимся с коммуникацией и наиболее эффективными конкретно в вашем случае инструментами для продвижения. Мы также можем помочь в непосредственном продвижении ваших мероприятий.'
                  : 'We can start with a consultation, where we will tell you about the most basic rules of promoting yourself as a promo group and your artists, starting from examples that are relevant to you. Then we will analyze your strengths and personalized sides, determine the communication and the most effective promotion tools that would specifically work in your case. <br/> We can also directly help you promote your events.'}
              </S.Title>
            </S.ServiceContent>
          )}
          {switchService === 3 && (
            <S.ServiceContent>
              <S.Title>
                {isRussian
                  ? 'Электронная сцена подарила нам огромное количество инфоповодов. О наших клубах и артистах пишут мировые издания, мы представляем страну на мировой арене культуры. Наше агентство давно дружит с музыкантами и экспертами, чье мнение имеет вес. Мы с радостью станем связующим звеном между представителями редакции и электронной сферы. Напишите нам запрос в форме обратной связи.'
                  : 'The electronic music scene gave us a large number of news feeds. World publications write about our clubs and artists, we represent the country on the world cultural arena. Our agency has long been friends with musicians and experts, whose opinion matters. We will gladly become a link between the representatives of the editorial office and the electronic music sphere. Write us a request in the feedback form.'}
              </S.Title>
            </S.ServiceContent>
          )}
          {switchService === 4 && (
            <S.ServiceContent>
              <S.Title>
                {isRussian
                  ? 'Мы предлагаем консультации для брендов, которые хотели бы работать с такой нынче привлекательной образованной и креативной аудиторией электронной некоммерческой сцены. Стремительное развитие электронной индустрии привлекло к себе немалый интерес молодежи и аудитории постарше. Одной из идей агентства является качественно объединить артистов и представителей брендов. Создавая только самые эффективные и продуктивные коллаборации и специальные проекты.'
                  : "We offer to consult brands that would like to work with such an attractive, educated, and creative audience in the electronic non-commercial music scene. The rapid development of the electronic music industry has attracted a considerable interest from young people and older audiences. One of the agency's ideas is to bring together artists and brand representatives in a quality manner - by creating only the most effective and productive collaborations and special projects."}
              </S.Title>
            </S.ServiceContent>
          )}
          {switchService === 5 && (
            <S.ServiceContent>
              <S.Title>
                {isRussian
                  ? 'Мы как амбассадоры индустрии готовы всячески поддержать и поучаствовать в национальных и частных инициативах, чья деятельность нацелена на развитие культурной сцены или представление индустрии в мире. Имейте нас в виду и всегда рассчитывайте на нашу помощь.'
                  : 'We, as industry ambassadors, are ready to support and participate in every possible way in national and private initiatives, whose activities are aimed at developing the cultural scene or representing the industry in the world. Keep us in mind and always count on our help.'}
              </S.Title>
            </S.ServiceContent>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Services;
