import React from 'react';

import Flex from '../../styled/flex';
import News from '../../components/News';
import ButtonBig from '../../components/Buttons/ButtonBig';
import Banner from '../../components/Banner';
import Hashtags from '../../components/Hashtag';
import Divider from '../../components/Divider';
import * as S from './styles';
import { useLanguage } from '../../hooks';

const NewsContainer = ({ data, hashtags, page }) => {
  const filtered = data.filter(item => item.extralarge);
  const filtered2 = data.filter(item => !item.extralarge);

  const [[language, setLanguage]] = useLanguage();
  // const filtered2 = data.filter(item =>
  //   item.hashtags.filter(item => item.name === 'gideon')
  // );

  return (
    <Flex width="100%">
      <Banner
        column
        news
        tabletMargin=""
        title={
          language === 'RUS'
            ? 'Статьи, как часть нашей экспертизы'
            : 'Articles as part of our expertise'
        }
        description={
          language === 'RUS'
            ? 'Написание и актуализация текстов, связанных с артистом и его проектами, создание или изменение контента в соответствии с актуальным позиционированием'
            : 'Exclusive publications created with local and renowned international media outlets.          '
        }
        page={page}
        language={language}
      />
      <Flex marginBottom="100px" />
      <Divider text={language === 'RUS' ? 'Мы написали:' : 'Our Articles'} />
      <S.Container
        row
        width="100%"
        justify="space-between"
        align="stretch"
        wrap="wrap"
        paddingAll="46px 49px"
        tabletPadding="0px 30px 49px"
      >
        <Flex width="100%" row tabletDirection="column-reverse">
          <Flex width="66%" tabletWidth="100%">
            {/* {filtered.length >= 1 ? (
              <News
                extraLarge
                size={filtered[0].size}
                title={filtered[0].title}
                date={filtered[0].date}
                link={filtered[0].link}
                hashtags={filtered[0].hashtags}
                src={filtered[0].image.file.url}
                page={page}
              />
            ) : null} */}
            {filtered.map(
              ({
                size,
                title,
                date,
                link,
                hashtags: hashtag,
                image: {
                  file: { url },
                },
                page: page1,
              }) => (
                <News
                  extraLarge
                  size={size}
                  title={title}
                  date={date}
                  link={link}
                  hashtags={hashtag}
                  src={url}
                  page={page1}
                />
              )
            )}
          </Flex>
          <Flex shrink="1" marginLeft="20px" tabletMargin="0 0 60px">
            <S.Title>Теги: </S.Title>
            <Flex width="100%" row wrap="wrap">
              {hashtags.map(({ name, key, value }) => (
                <Hashtags bottom="15px" value={value} key={key} text={name} />
              ))}
            </Flex>
          </Flex>
        </Flex>
        {filtered2.map(
          ({
            size,
            title,
            date,
            link,
            special,
            extralarge,
            hashtags,
            image: {
              file: { url },
            },
          }) => (
            <News
              key={title}
              size={size}
              title={title}
              link={link}
              src={url}
              date={date}
              special={special}
              extraLarge={extralarge}
              hashtags={hashtags}
            />
          )
        )}
        {/* <ButtonBig txt="Все новости" /> */}
      </S.Container>
    </Flex>
  );
};

export default NewsContainer;
