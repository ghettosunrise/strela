import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"

import SEO from "../../components/seo"
import CasesPage from "../../containers/CasesPage"
import Contact from "../../containers/ContactUs"
import MobileMenu from "../../containers/MobileMenu"

const Cases = () => {
  const [isClosed, setIsClosed] = useState(true)
  const [isClosedMobile, setIsClosedMobile] = useState(true)

  return (
    <Layout
      isClosedMobile={isClosedMobile}
      setIsClosedMobile={setIsClosedMobile}
      isClosed={isClosed}
      setIsClosed={setIsClosed}
    >
      <SEO title="Case" />
      <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
      <MobileMenu
        isClosedMobile={isClosedMobile}
        setIsClosedMobile={setIsClosedMobile}
      />
      <CasesPage></CasesPage>
    </Layout>
  )
}

export default Cases
