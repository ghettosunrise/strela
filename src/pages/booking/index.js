import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Flex from '../../styled/flex';
import Ticker from '../../components/Ticker';
import Artists from '../../containers/Artists';
import SEO from '../../components/seo';
import Header from '../../containers/BookingHeader';
import About from '../../containers/AboutUsBooking';
import Footer from '../../containers/Footer';
import Arrow from '../../components/Arrow';
import News from '../../containers/NewsBookingContainer';
import Form from '../../containers/BookingForm';
import { AnimatedBlock } from '../../components/Animations';

const H2 = styled.h2`
  font-family: Neue Machina;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.07em;
  color: #000000;
  padding: 60px 49px 0;
  margin-bottom: 0;
`;

const BookingHome = () => {
  const [isClosed, setIsClosed] = useState(true);
  // const { fromFirstPage } = location?.state || false;

  const data = useStaticQuery(graphql`
    query NewsBooking {
      allContentfulNews(limit: 15) {
        nodes {
          id
          size
          date
          title
          link
          special
          extralarge
          hashtags {
            id
            name
            value
          }
          image {
            file {
              url
            }
          }
        }
      }
    }
  `);

  return (
    <Flex width="100%" background="#FFF">
      {/* <AnimatedBlock booking firstPage={fromFirstPage} /> */}
      <SEO title="Home" />
      <Header isClosed={isClosed} setIsClosed={setIsClosed} main="main" />
      <Form isClosed={isClosed} setIsClosed={setIsClosed} />
      <Artists />
      <Arrow top="105px" left="-3%" />
      <Ticker />
      <Flex width="100%" background="#E5E5E5">
        <H2>News</H2>
        <News bookingPage data={data.allContentfulNews.nodes} />
      </Flex>
      <About />
      <Footer booking />
    </Flex>
  );
};

export default BookingHome;
