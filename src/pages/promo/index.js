/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import '../../assets/layout.css';

import AgencyHeader from '../../containers/AgencyHeader';
import Flex from '../../styled/flex';
import Divider from '../../components/Divider';
import Cases from '../../containers/Cases';
import WhatWeDo from '../../containers/WhatWeDo';
import Banner from '../../components/Banner';
import News from '../../containers/NewsContainer';
import Footer from '../../containers/Footer';
import Contact from '../../containers/ContactUs';
import Dropdown from '../../components/LangDropdown';

import MobileMenu from '../../containers/MobileMenu';
import Arrow from '../../components/Arrow';
import SEO from '../../components/seo';
import { AnimatedBlock } from '../../components/Animations';

import { ProvideLanguage } from '../../hooks';
import useLanguage from '../../hooks/useLanguage';

const AgencyHome = () => {
  const [isClosed, setIsClosed] = useState(true);
  const [isClosedMobile, setIsClosedMobile] = useState(true);

  // const { fromFirstPage } = location.state ?? false;

  const [[language, setLanguage]] = useLanguage();

  const data = useStaticQuery(graphql`
    query News {
      allContentfulNews(limit: 7) {
        nodes {
          id
          size
          date
          title
          link
          position
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
      {/* <AnimatedBlock agency firstPage={fromFirstPage} /> */}
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
      <Divider
        text={language === 'RUS' ? 'С кем мы работаем • кейсы' : 'Our Cases'}
      />
      <Cases language={language} />
      <WhatWeDo />
      <Banner
        title={bannerData.title}
        subtitle={bannerData.subtitle}
        description={bannerData.description}
        link={bannerData.link}
        image={bannerData.image.file.url}
      />
      <Divider text={language === 'RUS' ? 'Написано нами' : 'Our News'} />
      <News mainPage data={data.allContentfulNews.nodes} />
      <Footer agency="true" />
    </Flex>
  );
};

const Provided = () => (
  <ProvideLanguage>
    <AgencyHome />
  </ProvideLanguage>
);

// location={location}

export default Provided;
