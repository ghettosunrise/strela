import React from "react"
import { Link } from "gatsby"
import Header from "../../containers/WhatWeDoHeader"

import Layout from "../../components/layout"
import Services from "../../containers/Services"

import SEO from "../../components/seo"

const WhatWeDo = () => (
  <Layout>
    <SEO title="WhatWeDo" />
    <Header></Header>
    <Services></Services>
  </Layout>
)

export default WhatWeDo
