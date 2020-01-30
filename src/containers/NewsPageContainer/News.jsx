import React from "react"
import Flex from "../../styled/flex"
import News from "../../components/News"
import ButtonBig from "../../components/Buttons/ButtonBig"
import Banner from "../../components/Banner"
import Hashtags from "../../components/Hashtag"
import Divider from "../../components/Divider"
import * as S from "./styles"

const NewsContainer = ({ data, hashtags }) => {
  const filtered = data.filter(item => item.extralarge)

  const filtered2 = data.filter(item =>
    item.hashtags.filter(item => item.name === "gideon")
  )

  return (
    <Flex width="100%">
      <Banner
        column
        news
        tabletMargin=""
        title="Статьи, как часть нашей экспертизы"
        description="Написание и актуализация текстов, связанных с артистом и его проектами, создание или изменение контента в соответствии с актуальным позиционированием"
      />
      <Divider text="Мы написали:" />
      <Flex
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
            <News
              extraLarge
              size={filtered[0].size}
              title={filtered[0].title}
              date={filtered[0].date}
              link={filtered[0].link}
              hashtags={filtered[0].hashtags}
              src={filtered[0].image.file.url}
            />
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
        {data.map(
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
        <ButtonBig txt="Все новости"></ButtonBig>
      </Flex>
    </Flex>
  )
}

export default NewsContainer
