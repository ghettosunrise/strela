import React, { useState } from "react"
import { Link } from "gatsby"
import Header from "../../containers/WhatWeDoHeader"

import Layout from "../../components/layout"
import Services from "../../containers/Services"
import Contact from "../../containers/ContactUs"
import SEO from "../../components/seo"
import MobileMenu from "../../containers/MobileMenu"

const WhatWeDo = () => {
  const [isClosed, setIsClosed] = useState(true)
  const [isClosedMobile, setIsClosedMobile] = useState(true)

  return (
    <Layout
      isClosed={isClosed}
      setIsClosed={setIsClosed}
      isClosedMobile={isClosedMobile}
      setIsClosedMobile={setIsClosedMobile}
    >
      <SEO title="WhatWeDo" />
      <Header></Header>
      <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
      <MobileMenu
        isClosedMobile={isClosedMobile}
        setIsClosedMobile={setIsClosedMobile}
      />
      <Services></Services>
    </Layout>
  )
}

export default WhatWeDo
