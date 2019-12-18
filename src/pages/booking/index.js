import React from "react"
import { Link } from "gatsby"
import Flex from "../../styled/flex"
import Layout from "../../components/layout"
import Artists from "../../containers/Artists"
import SEO from "../../components/seo"

const BookingHome = () => (
  <Flex width="100%">
    <SEO title="Home" />
    <Artists />
  </Flex>
)

export default BookingHome
