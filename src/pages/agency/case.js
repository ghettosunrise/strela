import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Contact from "../../containers/ContactUs"
import SEO from "../../components/seo"

const Case = () => {
  const [isClosed, setIsClosed] = useState(true)
  return (
    <Layout isClosed={isClosed} setIsClosed={setIsClosed}>
      <SEO title="Case" />
      <h1>Case</h1>
      <Link to="/..">Prev</Link>
    </Layout>
  )
}

export default Case
