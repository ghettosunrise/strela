import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Flex from "../../styled/flex"
import News from "../../components/News"
import ButtonBig from "../../components/Buttons/ButtonBig"
import Banner from "../../components/Banner"
import Hashtags from "../../components/Hashtag"
import * as S from "./styles"
import Divider from "../../components/Divider"

const NewsContainer = ({ data, hashtags }) => {
  console.log(data)
  // console.log("test", data.find({ extralarge: "true" }))

  const filtered = data.filter(item => item.extralarge)
  // console.log("TCL: NewsContainer -> filtered", filtered)

  return (
    <Flex width="100%">
      <Banner
        column
        news
        title="Статьи, как часть нашей экспертизы"
        description="Написание и актуализация текстов, связанных с артистом и его проектами, создание или изменение контента в соответствии с актуальным позиционированием"
      />
      <Flex
        row
        width="100%"
        justify="space-between"
        align="stretch"
        wrap="wrap"
        paddingAll="46px 49px"
      >
        <Flex width="100%" row>
          <Flex width="66%">
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
          <Flex shrink="1" marginLeft="20px">
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
      </Flex>
      <ButtonBig txt="Все новости"></ButtonBig>
    </Flex>
  )
}

export default NewsContainer
