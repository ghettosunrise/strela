import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"

import SEO from "../../components/seo"
import About from "../../containers/AboutUs"

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <About />
  </Layout>
)

export default AboutUs
