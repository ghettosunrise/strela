import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Contact from "../../containers/ContactUs"
import Layout from "../../components/layout"
import NewsPage from "../../containers/NewsPageContainer"
import SEO from "../../components/seo"
import MobileMenu from "../../containers/MobileMenu"

const News = () => {
  const [isClosed, setIsClosed] = useState(true)
  const [isClosedMobile, setIsClosedMobile] = useState(true)

  const _data = useStaticQuery(graphql`
    query MyNews {
      allContentfulNews {
        nodes {
          id
          size
          date
          title
          link
          special
          extralarge
          hashtags {
            id
            name
            value
          }
          image {
            file {
              url
            }
          }
        }
      }

      allContentfulHashtag {
        nodes {
          name
          value
          id
        }
      }
    }
  `)

  // const myHashtags = useStaticQuery(graphql`
  //   query Hashtags {
  //     allContentfulHashtag {
  //       nodes {
  //         name
  //         value
  //         id
  //       }
  //     }
  //   }
  // `)
  console.log("TCL: News -> myHashtags", _data.allContentfulHashtag)

  return (
    <Layout
      isClosed={isClosed}
      setIsClosed={setIsClosed}
      isClosedMobile={isClosedMobile}
      setIsClosedMobile={setIsClosedMobile}
    >
      <SEO title="News" />
      <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
      <MobileMenu
        isClosedMobile={isClosedMobile}
        setIsClosedMobile={setIsClosedMobile}
      />

      <NewsPage
        hashtags={_data.allContentfulHashtag.nodes}
        data={_data.allContentfulNews.nodes}
      ></NewsPage>
    </Layout>
  )
}

export default News
