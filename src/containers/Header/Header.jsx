import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Nav from "../Nav"
import Flex from "../../styled/flex"
import Social from "../../components/Social"
import * as H from "../../styled/header"
import Arrow from "../../components/Icons"
import ButtonBlack from "../../components/Buttons"

const Header = ({ siteTitle }) => (
  <Flex
    row
    justify="space-between"
    align="center"
    width="100%"
    marginBottom="65px"
  >
    <H.HeaderLogoWrap>
      <Link to="/"></Link>
      <Arrow direction="R" />
    </H.HeaderLogoWrap>
    <Nav row></Nav>
    <Flex row align="center" maxWidth="323px" width="100%">
      <Social />
      <ButtonBlack txt="Связаться" />
    </Flex>
  </Flex>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
