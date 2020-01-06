import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Flex from "../../styled/flex"
import News from "../../components/News"
import ButtonBig from "../../components/Buttons/ButtonBig"

const NewsContainer = ({ data }) => {
  // const data = useStaticQuery(graphql`
  //   query News {
  //     allContentfulNews {
  //       nodes {
  //         id
  //         size
  //         date
  //         title
  //         link
  //         special
  //         extralarge
  //         hashtags {
  //           id
  //           name
  //         }
  //         image {
  //           file {
  //             url
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // console.log(data)
  return (
    <Flex width="100%" paddingAll="46px 49px">
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
      <ButtonBig link="/agency/news" txt="Все новости"></ButtonBig>
    </Flex>
  )
}

export default NewsContainer
