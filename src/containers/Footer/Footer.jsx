// import PropTypes from "prop-types"
import React from "react"
import Flex from "../../styled/flex"
import * as F from "../../styled/header"
import Arrow from "../../components/Icons"
import Social from "../../components/Social"
import Nav from "../Nav"
import { Link } from "gatsby"
import * as S from "./styles"

const Footer = ({ agency, booking }) => (
  <S.Footer>
    <Flex
      row
      justify="space-between"
      align="center"
      width="100%"
      marginBottom="97px"
    >
      <F.HeaderLogoWrap maxWidth="94px">
        <Link to="/"></Link>
      </F.HeaderLogoWrap>
      <Nav agency={agency} booking={booking} row></Nav>
      <Social />
      <Flex top="7px">
        <S.FooLink href="tel:+32323232323">+46 8 791 40 10</S.FooLink>
        <S.FooLink href="mailto:info@strela.com">info@strela.com</S.FooLink>
      </Flex>
      <S.FooTxt>
        32 Avenue of the Americas 19th Floor New York, NY 10013 United States
      </S.FooTxt>
    </Flex>
    <Flex row align="center" justify="space-between">
      <S.BottomTxt>
        Copyright © 2019 Strela.
        <br /> All rights reserved
      </S.BottomTxt>
      <Arrow direction="R"></Arrow>
    </Flex>
  </S.Footer>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Footer
