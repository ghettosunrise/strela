import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"

import SEO from "../../components/seo"
import CasesPage from "../../containers/CasesPage"
import Contact from "../../containers/ContactUs"

const Cases = () => {
  const [isClosed, setIsClosed] = useState(true)

  return (
    <Layout isClosed={isClosed} setIsClosed={setIsClosed}>
      <SEO title="Case" />
      <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
      <CasesPage></CasesPage>
    </Layout>
  )
}

export default Cases
