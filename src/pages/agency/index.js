import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"

import SEO from "../../components/seo"

const AgencyHome = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Agency</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default AgencyHome
