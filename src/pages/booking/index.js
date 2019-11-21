import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"

import SEO from "../../components/seo"

const BookingHome = () => (
  <div>
    <SEO title="Home" />
    <h1>Booking</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default BookingHome
