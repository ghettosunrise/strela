import React, { useState } from "react"
import { Link } from "gatsby"
import Contact from "../../containers/ContactUs"
import Layout from "../../components/layout"

import SEO from "../../components/seo"

const News = () => {
  const [isClosed, setIsClosed] = useState(true)

  return (
    <Layout isClosed={isClosed} setIsClosed={setIsClosed}>
      <SEO title="News" />
      <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
      <h1>News</h1>
      <Link to="/..">Prev</Link>
    </Layout>
  )
}

export default News
