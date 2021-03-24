import React from 'react';
import Flex from '../../styled/flex';
import News from '../../components/News';
import ButtonBig from '../../components/Buttons/ButtonBig';
import useLanguage from '../../hooks/useLanguage';

const NewsContainer = ({ data, caseNews, bookingPage, mainPage }) => {
  console.log(
    '🚀 ~ file: News.jsx ~ line 8 ~ NewsContainer ~ caseNews',
    caseNews
  );
  console.log('🚀 ~ file: News.jsx ~ line 8 ~ NewsContainer ~ data', data);
  const [[language]] = useLanguage();

  return (
    <Flex width="100%" paddingAll="46px 49px" tabletPadding="46px 30px">
      <Flex
        row
        width="100%"
        justify="space-between"
        align="stretch"
        wrap="wrap"
      >
        {data.map(
          ({
            id,
            size,
            title,
            date,
            link,
            position,
            special,
            extralarge,
            hashtags,
            image: {
              file: { url },
            },
          }) => (
            <News
              key={id}
              size={size}
              title={title}
              link={link}
              src={url}
              date={date}
              special={special}
              extraLarge={extralarge}
              hashtags={hashtags}
              caseNews={caseNews}
              position={position}
              mainPage={mainPage}
            />
          )
        )}
      </Flex>
      {!bookingPage && (
        <ButtonBig
          link="/promo/news"
          txt={language === 'RUS' ? 'Все новости' : 'All News'}
        />
      )}
    </Flex>
  );
};

export default NewsContainer;
