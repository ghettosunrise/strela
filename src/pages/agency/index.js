import React from "react"
// import { Link } from "gatsby"
import AgencyHeader from "../../containers/AgencyHeader"
import Flex from "../../styled/flex"
import Divider from "../../components/Divider"
import Cases from "../../containers/Cases"
import WhatWeDo from "../../containers/WhatWeDo"
import Banner from "../../components/Banner"

// import MainSc1 from "../../components/UI/containers/mainsc1"
import SEO from "../../components/seo"

const AgencyHome = () => (
  <Flex width="100%" paddingAll="46px 49px">
    <SEO title="Home" />
    <AgencyHeader />
    <Divider text="С кем мы работаем • кейсы" />
    <Cases></Cases>
    <WhatWeDo></WhatWeDo>
    <Banner
      title="I’m Jazz"
      subtitle="23-Окт, Closer"
      description="Пояснение основных моментов в пиаре собственного имени и проектов..."
    ></Banner>
  </Flex>
)

export default AgencyHome
