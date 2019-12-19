import React from "react"
import { Link } from "gatsby"
import Flex from "../../styled/flex"
import Layout from "../../components/layout"
import Artists from "../../containers/Artists"
import SEO from "../../components/seo"
import Header from "../../containers/BookingHeader"
import About from "../../containers/AboutUsBooking"
import Footer from "../../containers/Footer"

const BookingHome = () => (
  <Flex width="100%" background="#FFF">
    <SEO title="Home" />
    <Header />
    <Artists />
    <About />
    <Footer></Footer>
  </Flex>
)

export default BookingHome
