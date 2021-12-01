import React from 'react';
import Flex from '../../styled/flex';
import * as S from './styles';
import alisa from '../../images/alisa.png';
import { useLanguage } from '../../hooks';

const AboutUs = () => {
  const [[language, setLanguage]] = useLanguage();

  const isRussian = language === 'RUS';
  return (
    <Flex width="100%" paddingAll="30px 49px 150px" tabletPadding="0 35px 60px">
      <Flex width="100%">
        <S.Title>
          {/* {isRussian ? '' : ''} */}
          {isRussian
            ? 'Наша цель — развивать электронную сцену — подтверждена многолетней практикой и является самой значимой для агентства.'
            : 'Our goal is to develop and grow the electronic music scene, which has been reinforced by many years of practice and is the most significant objective for the agency.'}
        </S.Title>
        <S.Descritpion>
          {isRussian
            ? 'Мы создали агентство Strela, чтобы помочь артистам, организаторам и владельцем площадок комфортно общаться со своей аудиторией, продвигая себя локально и за пределами страны.'
            : 'Strela Agency was created to help artists, promoters, and venue owners communicate with their audience clearly and cohesively, whilst promoting themselves both on a local and international arena. '}

          <br />
          <br />
          {isRussian
            ? ' Strela — это первый в Украине и на территории постсоветского пространства подобный проект, за который взялись профессионалы индустрии, работающие внутри сегмента и живущие ею.'
            : 'This is the first project of its kind both in Ukraine and on the territory of the post-Soviet space. It will be undertaken by industry professionals who have worked within the segment and lived it first-hand.'}
        </S.Descritpion>
        <S.DecorItem />
      </Flex>
      <Flex width="100%">
        <S.Hero>
          <img src={alisa} />
          <Flex shrink="1">
            <S.HeroTitle>
              {isRussian ? 'Алиса Маллен' : 'Alisa Mullen'}
            </S.HeroTitle>
            <S.HeroSubtitle>
              {isRussian
                ? 'Основатель проекта, один из главных специалистов по пиару в клубной сфере Украины, пиар-директор (2015-COVID19) ведущего киевского клуба Closer, основных украинских фестивалей Strichka и Brave! Factory, букинг-менеджер,'
                : ''}
            </S.HeroSubtitle>
            <S.HeroDescription>
              {isRussian
                ? 'практикующий частный пиар-консультант с 10-летним стажем. Ее часто можно встретить выступающей с лекциями по пиару, продвижению, копирайтингу и работе со СМИ, а также помогающей тем или иным субъектам ночной жизни и культурного досуга повышать узнаваемость и развивать их проекты.'
                : 'is the founder of the project, one of the main PR experts of the club sphere of Ukraine, PR manager (2015-COVID19) of the leading Kyiv club Closer, the main Ukrainian festivals Strichka and Brave! Factory, booking manager, practicing private PR consultant with 10 years of experience. She can often be found giving lectures on PR, promotion, copywriting, and working with the media, as well as helping certain cases of nightlife and cultural entertainment to increase their public awareness and develop their projects.'}
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
        <S.Hero alignSelf="flex-end" justify="flex-end" marginRight="50px">
          <Flex shrink="1" align="flex-end">
            <S.HeroSubtitle>
              {isRussian
                ? 'Особая благодарность за неизмеримое участие в рождении проекта Дмитрию Игнатьеву, музыкальному журналисту, основателю, российского Mixmag, печатного журнала Sensor, телеграм-канала о клубной музыке “МиР”, пишущему об электронной музыке около 15 лет, а увлекающийся ею с 1993 года.'
                : 'A special thanks to Dmitry Ignatiev, music journalist, founder of the Russian Mixmag, printed magazine Sensor, telegram channel about club music “МиР”, who has been writing about electronic music for about 15 years, and has been fond of it since 1993. He has taken an immeasurable part in the birth of the project. '}
            </S.HeroSubtitle>
          </Flex>
        </S.Hero>
        <S.BottomTxt1>
          {isRussian
            ? 'Мы стремимся развивать клубную индустрию Украины, чтобы ее уровень соответствовал принятым во всем мире высоким стандартам, поэтому основываемся в своей работе на устоявшихся в мировой клубной индустрии ценностях открытости, честности и равноправия.'
            : 'We strive to strengthen the club industry in Ukraine so that its level meets the high criteria held throughout the world, therefore, in our field of work we rely on the values of openness, honesty, and equality - all of which are established in the global club industry. '}
        </S.BottomTxt1>
        <S.BottomTxt2>
          {isRussian
            ? 'Наше агентство является небольшим, но важным и даже необходимым кирпичиком фундамента, на котором базируется индустрия электронной музыки в любой развитой стране, ведь при непосредственном участии подобных игроков рынка, осуществляются многие внутренние процессы.'
            : 'Our agency is a small, yet an important and necessary brick holding the foundation on which an electronic music industry is based in any developed country because through the direct participation of such market players, many internal processes are carried out.'}
        </S.BottomTxt2>
      </Flex>
    </Flex>
  );
};

export default AboutUs;
