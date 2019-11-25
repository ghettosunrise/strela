import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import * as S from "../styled/Buttons"
import Nav from "../components/UI/Nav"
import Flex from "../styled/flex"
import Social from "../components/UI/Social"
import * as H from "../styled/header"

const Header = ({ siteTitle }) => (
  <H.StyledHeader>
    <H.HeaderLogoWrap>
      <Link to="/"></Link>
      <span></span>
    </H.HeaderLogoWrap>
    <Nav row></Nav>
    <Flex row align="center" maxWidth="323px" width="100%">
      <Social />
      <S.BlackButton>
        Связаться <span></span>
      </S.BlackButton>
    </Flex>
  </H.StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
