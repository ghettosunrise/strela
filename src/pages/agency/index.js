import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import AgencyHeader from "../../containers/AgencyHeader"
import Flex from "../../styled/flex"
import Divider from "../../components/Divider"
import Cases from "../../containers/Cases"
import WhatWeDo from "../../containers/WhatWeDo"
import Banner from "../../components/Banner"
import News from "../../containers/NewsContainer"
import Footer from "../../containers/Footer"
import Contact from "../../containers/ContactUs"
import MobileMenu from "../../containers/MobileMenu"

// import MainSc1 from "../../components/UI/containers/mainsc1"
import SEO from "../../components/seo"

const AgencyHome = () => {
  const [isClosed, setIsClosed] = useState(true)
  const [isClosedMobile, setIsClosedMobile] = useState(true)

  const data = useStaticQuery(graphql`
    query News {
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
    }
  `)
  // console.log(" mdd", data.allContentfulNews.nodes)

  // console.log("isClosed", isClosed)

  return (
    <Flex width="100%">
      <SEO title="Home" />
      <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
      <AgencyHeader
        isClosed={isClosed}
        setIsClosed={setIsClosed}
        isClosedMobile={isClosedMobile}
        setIsClosedMobile={setIsClosedMobile}
      />
      <MobileMenu
        isClosedMobile={isClosedMobile}
        setIsClosedMobile={setIsClosedMobile}
      />
      <Divider text="С кем мы работаем • кейсы" />
      <Cases></Cases>
      <WhatWeDo></WhatWeDo>
      <Banner
        title="I’m Jazz"
        subtitle="23-Окт, Closer"
        description="Пояснение основных моментов в пиаре собственного имени и проектов..."
        link
      ></Banner>
      <Divider text="Написано нами" />
      <News data={data.allContentfulNews.nodes} />
      <Footer agency="true"></Footer>
    </Flex>
  )
}

export default AgencyHome
