import React from "react"
import { Link } from "gatsby"
import "../components/layout.css"
import Flex, { MainPageWrap } from "../styled/flex"
import logo from "../images/logo.png"

// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <MainPageWrap justify="center" align="center" width="100%" height="100vh">
    <SEO title="Home" />
    <img src={logo}></img>
    <Flex row maxWidth="940px" justify="space-between" width="100%">
      <Flex row align="center">
        <span class="arrow_left"></span>
        <Link to="/agency">Agency</Link>
      </Flex>
      <Flex row align="center">
        <Link to="/booking">Booking</Link>
        <span class="arrow_right"></span>
      </Flex>
    </Flex>
  </MainPageWrap>
)

export default IndexPage
