/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../assets/layout.css"
import Flex from "../styled/flex"
import Header from "../containers/Header"
import Footer from "../containers/Footer"
import Contact from "../containers/ContactUs"
import MobileMenu from "../containers/MobileMenu"

const Layout = ({
  children,
  setIsClosed,
  isClosed,
  setIsClosedMobile,
  isClosedMobile,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Flex width="100%">
        <Header
          setIsClosed={setIsClosed}
          setIsClosedMobile={setIsClosedMobile}
          isClosedMobile={isClosedMobile}
          siteTitle={data.site.siteMetadata.title}
        />
        <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
        {/* <MobileMenu
          isClosedMobile={isClosedMobile}
          setIsClosedMobile={setIsClosedMobile}
        /> */}

        <main>{children}</main>

        <Footer agency="true"></Footer>
      </Flex>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
