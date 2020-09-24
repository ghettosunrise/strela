/* eslint-disable react/jsx-filename-extension */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { useAnimationStatus } from '../hooks/useAnimationStatus';
import { ProvideLanguage } from '../hooks';

import '../assets/layout.css';
import Flex from '../styled/flex';
import Header from '../containers/Header';
import Form from '../containers/BookingForm';
import Footer from '../containers/Footer';
import Contact from '../containers/ContactUs';
import MobileMenu from '../containers/MobileMenu';
import BookingHeader from '../containers/BookingHeader';
import { AnimatedBlock } from './Animations';

// const window = document.documentElement.clientWidth;

const Layout = ({
  children,
  setIsClosed,
  isClosed,
  setIsClosedMobile,
  isClosedMobile,
  booking,
  page,
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

  const [documentLoaded, setDocumentLoaded] = useState(null);
  let window;
  useEffect(() => {
    setDocumentLoaded(true);
  }, []);

  documentLoaded === true
    ? (window = document.documentElement.clientWidth)
    : null;

  return (
    <ProvideLanguage>
      <useAnimationStatus.Consumer>
        {context => (
          <>
            {/* <AnimatedBlock
            agency={!booking}
            status={context.animationStatus}
            navigateTo
          /> */}
            <Flex width="100%" background={booking ? '#FFF' : null}>
              {booking && (
                <>
                  <BookingHeader
                    setIsClosed={setIsClosed}
                    setIsClosedMobile={setIsClosedMobile}
                    isClosedMobile={isClosedMobile}
                    siteTitle={data.site.siteMetadata.title}
                  />
                  <Form isClosed={isClosed} setIsClosed={setIsClosed} />
                  <div>{children}</div>
                  <Footer booking="true" />
                </>
              )}
              {!booking && (
                <>
                  <Header
                    setIsClosed={setIsClosed}
                    setIsClosedMobile={setIsClosedMobile}
                    isClosedMobile={isClosedMobile}
                    siteTitle={data.site.siteMetadata.title}
                    page={page}
                  />
                  <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
                  <MobileMenu
                    isClosedMobile={isClosedMobile}
                    setIsClosedMobile={setIsClosedMobile}
                  />
                  <main>{children}</main>
                  <Footer agency="true" />
                </>
              )}
            </Flex>
          </>
        )}
      </useAnimationStatus.Consumer>
    </ProvideLanguage>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
