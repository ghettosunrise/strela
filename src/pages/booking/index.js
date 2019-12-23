import React, { useState } from "react"
import { Link } from "gatsby"
import Flex from "../../styled/flex"
import Layout from "../../components/layout"
import Artists from "../../containers/Artists"
import SEO from "../../components/seo"
import Header from "../../containers/BookingHeader"
import About from "../../containers/AboutUsBooking"
import Footer from "../../containers/Footer"
import Form from "../../containers/BookingForm"

const BookingHome = () => {
  const [isClosed, setIsClosed] = useState(true)
  return (
    <Flex width="100%" background="#FFF">
      <SEO title="Home" />
      <Header isClosed={isClosed} setIsClosed={setIsClosed} />
      <Form isClosed={isClosed} setIsClosed={setIsClosed} />
      <Artists />
      <About />
      <Footer></Footer>
    </Flex>
  )
}

export default BookingHome
