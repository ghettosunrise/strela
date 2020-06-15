/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import AgencyHeader from '../../containers/AgencyHeader';
import Flex from '../../styled/flex';
import Divider from '../../components/Divider';
import Cases from '../../containers/Cases';
import WhatWeDo from '../../containers/WhatWeDo';
import Banner from '../../components/Banner';
import News from '../../containers/NewsContainer';
import Footer from '../../containers/Footer';
import Contact from '../../containers/ContactUs';
import MobileMenu from '../../containers/MobileMenu';
import Arrow from '../../components/Arrow';
import SEO from '../../components/seo';
import { AnimatedBlock } from '../../components/Animations';

const AgencyHome = ({ location }) => {
  const [isClosed, setIsClosed] = useState(true);
  const [isClosedMobile, setIsClosedMobile] = useState(true);

  const { fromFirstPage } = location.state || false;

  const data = useStaticQuery(graphql`
    query News {
      allContentfulNews {
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
      contentfulBanner(bannerType: { eq: "link" }) {
        id
        link
        subtitle
        description
        image {
          file {
            url
          }
        }
        title
      }
    }
  `);

  const bannerData = data.contentfulBanner;

  return (
    <Flex width="100%">
      <SEO title="Home" />
      <AnimatedBlock agency firstPage={fromFirstPage} />
      <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
      <AgencyHeader
        isClosed={isClosed}
        setIsClosed={setIsClosed}
        isClosedMobile={isClosedMobile}
        setIsClosedMobile={setIsClosedMobile}
      />
      <Arrow top={0} right={0} z="-1" />
      <MobileMenu
        isClosedMobile={isClosedMobile}
        setIsClosedMobile={setIsClosedMobile}
      />
      <Divider text="С кем мы работаем • кейсы" />
      <Cases />
      <WhatWeDo />
      <Banner
        title={bannerData.title}
        subtitle={bannerData.subtitle}
        description={bannerData.description}
        link={bannerData.link}
        image={bannerData.image.file.url}
      />
      <Divider text="Написано нами" />
      <News data={data.allContentfulNews.nodes} />
      <Footer agency="true" />
    </Flex>
  );
};

export default AgencyHome;
