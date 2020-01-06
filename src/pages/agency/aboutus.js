import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Contact from "../../containers/ContactUs"
import SEO from "../../components/seo"
import About from "../../containers/AboutUs"
import MobileMenu from "../../containers/MobileMenu"

const AboutUs = () => {
  const [isClosed, setIsClosed] = useState(true)
  const [isClosedMobile, setIsClosedMobile] = useState(true)
  return (
    <Layout
      isClosed={isClosed}
      setIsClosed={setIsClosed}
      isClosedMobile={isClosedMobile}
      setIsClosedMobile={setIsClosedMobile}
    >
      <SEO title="About Us" />
      <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
      <MobileMenu
        isClosedMobile={isClosedMobile}
        setIsClosedMobile={setIsClosedMobile}
      />
      <About />
    </Layout>
  )
}

export default AboutUs
