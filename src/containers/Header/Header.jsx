import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Nav from "../Nav"
import Flex from "../../styled/flex"
import Social from "../../components/Social"
import * as H from "../../styled/header"
import * as S from "./styles"
import Arrow from "../../components/Icons"
import ButtonBlack from "../../components/Buttons/ButtonBlack"
import Burger from "../../components/Buttons/Burger"

const Header = ({
  siteTitle,
  setIsClosed,
  setIsClosedMobile,
  isClosedMobile,
}) => {
  const window = document.documentElement.clientWidth

  return (
    <S.Header>
      <Flex row justify="space-between" align="center" width="100%">
        <H.HeaderLogoWrap
          maxWidth="219px"
          row
          align="center"
          justify="space-between"
          width="100%"
        >
          <Link to="/"></Link>
          <Arrow direction="R" />
        </H.HeaderLogoWrap>
        {/* <Nav agency row></Nav>
        <Flex row align="center" maxWidth="323px" width="100%">
          <Social />
          <ButtonBlack txt="Связаться" onClick={() => setIsClosed(false)} />
        </Flex> */}
        {window >= 1150 ? (
          <>
            <Nav agency row></Nav>
            <Flex row align="center" maxWidth="323px" width="100%">
              <Social />
              <ButtonBlack txt="Связаться" onClick={() => setIsClosed(false)} />
            </Flex>
          </>
        ) : (
          <Burger
            onClick={() => {
              isClosedMobile === true
                ? setIsClosedMobile(false)
                : setIsClosedMobile(true)
            }}
            isClosedMobile={isClosedMobile}
            setIsClosedMobile={setIsClosedMobile}
          />
        )}
      </Flex>
    </S.Header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
