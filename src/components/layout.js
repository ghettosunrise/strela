/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import '../assets/layout.css';
import Flex from '../styled/flex';
import Header from '../containers/Header';
import Form from '../containers/BookingForm';
import Footer from '../containers/Footer';
import Contact from '../containers/ContactUs';
import MobileMenu from '../containers/MobileMenu';
import BookingHeader from '../containers/BookingHeader';

const window = document.documentElement.clientWidth;

const Layout = ({
  children,
  setIsClosed,
  isClosed,
  setIsClosedMobile,
  isClosedMobile,
  booking,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);


  return (
    <>
      <Flex width="100%" background={booking ? '#FFF' : null}>
        {booking ? (
          <BookingHeader setIsClosed={setIsClosed}
            setIsClosedMobile={setIsClosedMobile}
            isClosedMobile={isClosedMobile}
            siteTitle={data.site.siteMetadata.title} />
        ) : (
            <Header
              setIsClosed={setIsClosed}
              setIsClosedMobile={setIsClosedMobile}
              isClosedMobile={isClosedMobile}
              siteTitle={data.site.siteMetadata.title}
            />)}


        {booking ? (
          <>
            <Form isClosed={isClosed} setIsClosed={setIsClosed} />
            <div>{children}</div>
            <Footer booking="true"></Footer>
          </>
        ) : (
            <>
              <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
              <MobileMenu
                isClosedMobile={isClosedMobile}
                setIsClosedMobile={setIsClosedMobile}
              />
              <main>{children}</main>
              <Footer agency="true"></Footer>
            </>
          )}


      </Flex>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
