// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as S from "../styled/Buttons"
import Nav from "../components/UI/Nav"
import Flex from "../styled/flex"
import Social from "../components/UI/Social"

const Header = ({ siteTitle }) => (
  <header>
    <Nav></Nav>
    <Flex>
      <Social />
    </Flex>
    <S.BlackButton>
      Связаться <span></span>
    </S.BlackButton>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
