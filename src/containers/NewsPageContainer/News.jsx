import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Flex from "../../styled/flex"
import News from "../../components/News"
import ButtonBig from "../../components/Buttons/ButtonBig"

const NewsContainer = ({ data }) => {
  // const data = useStaticQuery(graphql`
  //   query NewsPage {
  //     allContentfulNews {
  //       nodes {
  //         size
  //         date
  //         title
  //         link
  //         special
  //         extralarge
  //         image {
  //           file {
  //             url
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  console.log(data)
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
