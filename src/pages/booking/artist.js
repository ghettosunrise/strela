import React, { useState } from "react"
import Flex from "../../styled/flex"

import SEO from "../../components/seo"
import Header from "../../containers/BookingHeader"
import ArtistPage from "../../containers/ArtistPage"
import Footer from "../../containers/Footer"
import Arrow from "../../components/Arrow"
import Form from "../../containers/BookingForm"

const Artist = () => {
  const [isClosed, setIsClosed] = useState(true)
  return (
    <Flex width="100%" background="#FFF">
      <SEO title="Home" />
      <Header isClosed={isClosed} setIsClosed={setIsClosed} />
      <Form isClosed={isClosed} setIsClosed={setIsClosed} />
      <ArtistPage />
      <Arrow top="105px" left="-3%" />

      <Footer booking></Footer>
    </Flex>
  )
}

export default Artist
