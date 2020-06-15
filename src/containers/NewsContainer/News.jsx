import React from 'react';
import Flex from '../../styled/flex';
import News from '../../components/News';
import ButtonBig from '../../components/Buttons/ButtonBig';

const NewsContainer = ({ data }) => (
  <Flex width="100%" paddingAll="46px 49px" tabletPadding="46px 30px">
    <Flex row width="100%" justify="space-between" align="stretch" wrap="wrap">
      {console.log(data, 'DATA')}
      {data.map(
        ({
          id,
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
            key={id}
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
    </Flex>
    <ButtonBig link="/agency/news" txt="Все новости" />
  </Flex>
);

export default NewsContainer;
