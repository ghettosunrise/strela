import React, { useState } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CasesPage from "../../containers/CasesPage"
import Contact from "../../containers/ContactUs"
import Arrow from "../../components/Arrow"

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
      <Arrow top="105px" left="-3%" />
      <CasesPage></CasesPage>
    </Layout>
  )
}

export default Cases
