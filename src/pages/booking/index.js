import React, { useState } from "react"
import Flex from "../../styled/flex"
import Artists from "../../containers/Artists"
import SEO from "../../components/seo"
import Header from "../../containers/BookingHeader"
import About from "../../containers/AboutUsBooking"
import Footer from "../../containers/Footer"
import Arrow from "../../components/Arrow"
import Form from "../../containers/BookingForm"

const BookingHome = () => {
  const [isClosed, setIsClosed] = useState(true)
  return (
    <Flex width="100%" background="#FFF">
      <SEO title="Home" />
      <Header isClosed={isClosed} setIsClosed={setIsClosed} main="main" />
      <Form isClosed={isClosed} setIsClosed={setIsClosed} />
      <Artists />
      <Arrow top="105px" left="-3%" />
      <About />
      <Footer booking></Footer>
    </Flex>
  )
}

export default BookingHome
