import React, { useState } from "react"
// import { Link } from "gatsby"
import AgencyHeader from "../../containers/AgencyHeader"
import Flex from "../../styled/flex"
import Divider from "../../components/Divider"
import Cases from "../../containers/Cases"
import WhatWeDo from "../../containers/WhatWeDo"
import Banner from "../../components/Banner"
import News from "../../containers/NewsContainer"
import Footer from "../../containers/Footer"
import Contact from "../../containers/ContactUs"

// import MainSc1 from "../../components/UI/containers/mainsc1"
import SEO from "../../components/seo"

const AgencyHome = () => {
  const [isClosed, setIsClosed] = useState(true)

  console.log("isClosed", isClosed)

  return (
    <Flex width="100%">
      <SEO title="Home" />
      <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
      <AgencyHeader isClosed={isClosed} setIsClosed={setIsClosed} />
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
      <News></News>
      <Footer></Footer>
    </Flex>
  )
}

export default AgencyHome
