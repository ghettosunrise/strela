import React from "react"
import { Link } from "gatsby"
import "../components/layout.css"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <h1>Strela agency</h1>
    <Link to="/agency">Agency</Link>
    <Link to="/booking">Booking</Link>
  </div>
)

export default IndexPage
