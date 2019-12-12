import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Flex from "../../styled/flex"
import News from "../../components/News"
import ButtonBig from "../../components/Buttons/ButtonBig"
import news1 from "../../images/news1.png"
import news2 from "../../images/news2.png"
import news3 from "../../images/news3.png"
import news4 from "../../images/news4.png"

const NewsContainer = () => {
  const data = useStaticQuery(graphql`
    query NewsPage {
      allContentfulNews {
        nodes {
          size
          date
          title
          link
          special
          extralarge
          image {
            file {
              url
            }
          }
        }
      }
    }
  `)
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
        {data.allContentfulNews.nodes.map(
          ({
            size,
            title,
            date,
            link,
            special,
            extralarge,
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
            />
          )
        )}
      </Flex>
      <ButtonBig txt="Все новости"></ButtonBig>
    </Flex>
  )
}

export default NewsContainer
