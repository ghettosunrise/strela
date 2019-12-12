import React, { useState } from "react"
import { Link } from "gatsby"
import Contact from "../../containers/ContactUs"
import Layout from "../../components/layout"
import NewsPage from "../../containers/NewsPageContainer"
import SEO from "../../components/seo"

const News = () => {
  const [isClosed, setIsClosed] = useState(true)

  return (
    <Layout isClosed={isClosed} setIsClosed={setIsClosed}>
      <SEO title="News" />
      <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
      <NewsPage></NewsPage>
    </Layout>
  )
}

export default News
