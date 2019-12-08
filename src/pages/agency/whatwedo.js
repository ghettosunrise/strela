import React, { useState } from "react"
import { Link } from "gatsby"
import Header from "../../containers/WhatWeDoHeader"

import Layout from "../../components/layout"
import Services from "../../containers/Services"
import Contact from "../../containers/ContactUs"
import SEO from "../../components/seo"

const WhatWeDo = () => {
  const [isClosed, setIsClosed] = useState(true)

  return (
    <Layout isClosed={isClosed} setIsClosed={setIsClosed}>
      <SEO title="WhatWeDo" />
      <Header></Header>
      <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
      <Services></Services>
    </Layout>
  )
}

export default WhatWeDo
