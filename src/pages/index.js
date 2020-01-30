import React from "react"
import { Link } from "gatsby"
import "../assets/layout.css"
import Flex, { MainPageWrap } from "../styled/flex"
import logo from "../images/logo.png"
import Arrow from "../components/Icons"

// import { Icon } from "components"

// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <MainPageWrap justify="center" align="center" width="100%" height="100vh">
    <SEO title="Home" />
    <img src={logo}></img>
    <Flex row maxWidth="940px" justify="space-between" width="100%" tabletMaxWidth="620px" mobileMaxWidth="290px">
      <Flex row align="center">
        <Arrow margin="24px" direction="L" />
        {/* <Icon.ArrowLeft /> */}
        <Link to="/agency">Agency</Link>
      </Flex>
      <Flex row align="center">
        <Link to="/booking">Booking</Link>
        {/* <span className="arrow_right"></span> */}
        <Arrow margin="24px" direction="R" />
      </Flex>
    </Flex>
  </MainPageWrap>
)

export default IndexPage
