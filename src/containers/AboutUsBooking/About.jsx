import React from 'react';
import Flex from '../../styled/flex';
import * as S from './styles';
import { useLanguage } from '../../hooks';

const AboutUs = () => {
  const [[language, setLanguage]] = useLanguage();
  console.log('AboutUs -> language', language);

  return (
    <Flex
      width="100%"
      paddingAll="80px 49px 120px"
      tabletPadding="80px 30px 20px"
      mobilePadding="80px 30px 0px"
      background="#FFF"
    >
      {/* <S.Title id="about">About us</S.Title> */}
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
          Strela is a Kyiv-based artist booking and management agency
          representing a roster of independent DJs and producers who are driven
          by a flaming passion for electronic music.
        </S.Title>
        <S.Txt>
          We aim to support and provide professional guidance to the artists
          while always staying true to our core values — mutual respect, trust,
          and friendship. Strela offers a global management and booking service
          that welcomes free expression and sets no creative limitations.
        </S.Txt>
        <S.Block />
      </Flex>
    </Flex>
  );
};

export default AboutUs;
