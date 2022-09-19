import React from 'react';
import Flex from '../../styled/flex';
import * as S from './styles';
import alisa from '../../images/alisa.png';
import { useLanguage } from '../../hooks';

const AboutUs = () => {
  const [[language, setLanguage]] = useLanguage();

  const isUA = language === 'UA';
  return (
    <Flex width="100%" paddingAll="30px 49px 150px" tabletPadding="0 35px 60px">
      <Flex width="100%">
        <S.Title>
          {/* {isUA ? '' : ''} */}
          {isUA
            ? 'Наша мета – розвивати електронну сцену – підтверджена багаторічною практикою і є найвагомішою для агентства.'
            : 'Our goal is to develop and grow the electronic music scene, which has been reinforced by many years of practice and is the most significant objective for the agency.'}
        </S.Title>
        <S.Descritpion>
          {isUA
            ? 'Ми створили агентство Strela, щоб допомогти артистам, організаторам та власникам майданчиків комфортно спілкуватися зі своєю аудиторією, просуваючи себе локально та за межами країни.'
            : 'Strela Agency was created to help artists, promoters, and venue owners communicate with their audience clearly and cohesively, whilst promoting themselves both on a local and international arena. '}

          <br />
          <br />
          {isUA
            ? 'Strela — це перший в Україні та на території пострадянського простору подібний проект, за який взялися професіонали індустрії, які працюють усередині сегменту та живуть нею.'
            : 'This is the first project of its kind both in Ukraine and on the territory of the post-Soviet space. It will be undertaken by industry professionals who have worked within the segment and lived it first-hand.'}
        </S.Descritpion>
        <S.DecorItem />
      </Flex>
      <Flex width="100%">
        <S.Hero>
          <img src={alisa} />
          <Flex shrink="1">
            <S.HeroTitle>{isUA ? 'Алиса Маллен' : 'Alisa Mullen'}</S.HeroTitle>
            <S.HeroSubtitle>
              {isUA
                ? 'Засновник проекту, один із головних спеціалістів з піару в клубній сфері України, піар-директор (2015-COVID19) провідного київського клубу Closer, основних українських фестивалів Strichka та Brave! Factory, букінг-менеджер,'
                : ''}
            </S.HeroSubtitle>
            <S.HeroDescription>
              {isUA
                ? "практикуючий приватний піар-консультант із 10-річним стажем. Її часто можна зустріти виступаючою з лекціями з піару, просування, копірайтингу та роботи зі ЗМІ, а також допомагає тим чи іншим суб'єктам нічного життя та культурного дозвілля підвищувати впізнаваність та розвивати їх проекти."
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
              {isUA
                ? 'Особлива подяка за незмірну участь у народженні проекту Дмитру Ігнатьєву, музичному журналісту, засновнику, російського Mixmag, друкованого журналу Sensor, телеграм-каналу про клубну музику "МиР", що пише про електронну музику близько 15 років, а захоплюється9.'
                : 'A special thanks to Dmitry Ignatiev, music journalist, founder of the UAsian Mixmag, printed magazine Sensor, telegram channel about club music “МиР”, who has been writing about electronic music for about 15 years, and has been fond of it since 1993. He has taken an immeasurable part in the birth of the project. '}
            </S.HeroSubtitle>
          </Flex>
        </S.Hero>
        <S.BottomTxt1>
          {isUA
            ? 'Ми прагнемо розвивати клубну індустрію України, щоб її рівень відповідав прийнятим у всьому світі високим стандартам, тому ґрунтуємось у своїй роботі на усталених у світовій клубній індустрії цінностях відкритості, чесності та рівноправності.'
            : 'We strive to strengthen the club industry in Ukraine so that its level meets the high criteria held throughout the world, therefore, in our field of work we rely on the values of openness, honesty, and equality - all of which are established in the global club industry. '}
        </S.BottomTxt1>
        <S.BottomTxt2>
          {isUA
            ? 'Наше агентство є невеликою, але важливою і навіть необхідною цеглиною фундаменту, на якій базується індустрія електронної музики в будь-якій розвиненій країні, адже за безпосередньої участі подібних гравців ринку здійснюються багато внутрішніх процесів.'
            : 'Our agency is a small, yet an important and necessary brick holding the foundation on which an electronic music industry is based in any developed country because through the direct participation of such market players, many internal processes are carried out.'}
        </S.BottomTxt2>
      </Flex>
    </Flex>
  );
};

export default AboutUs;
