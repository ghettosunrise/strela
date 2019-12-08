import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Contact from "../../containers/ContactUs"
import SEO from "../../components/seo"
import About from "../../containers/AboutUs"

const AboutUs = () => {
  const [isClosed, setIsClosed] = useState(true)
  return (
    <Layout isClosed={isClosed} setIsClosed={setIsClosed}>
      <SEO title="About Us" />
      <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
      <About />
    </Layout>
  )
}

export default AboutUs
