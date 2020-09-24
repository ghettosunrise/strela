import React from 'react';

import Flex from '../../styled/flex';
import News from '../../components/News';
import ButtonBig from '../../components/Buttons/ButtonBig';
import Banner from '../../components/Banner';
import Hashtags from '../../components/Hashtag';
import Divider from '../../components/Divider';
import * as S from './styles';

const NewsContainer = ({ data, hashtags, page }) => {
  // const filtered = data.filter(item => item.extralarge);
  const filtered2 = data.filter(item => !item.extralarge);
  // const filtered2 = data.filter(item =>
  //   item.hashtags.filter(item => item.name === 'gideon')
  // );

  return (
    <Flex width="100%">
      <S.Container
        row
        width="100%"
        justify="space-between"
        align="stretch"
        wrap="wrap"
        paddingAll="46px 49px"
        tabletPadding="0px 30px 49px"
      >
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
