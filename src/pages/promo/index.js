/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import '../../assets/layout.css';

// import AgencyHeader from '../../containers/AgencyHeader';
import Layout from '../../components/layout';
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

import { ProvideLanguage, useLanguage } from '../../hooks';

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
    // <ProvideLanguage language={language}>
    //   <Flex width="100%">
    //     <SEO title="Home" />
    //     {/* <AnimatedBlock agency firstPage={fromFirstPage} /> */}
    //     <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
    //     <AgencyHeader
    //       isClosed={isClosed}
    //       setIsClosed={setIsClosed}
    //       isClosedMobile={isClosedMobile}
    //       setIsClosedMobile={setIsClosedMobile}
    //     />
    <Layout
      isClosed={isClosed}
      setIsClosed={setIsClosed}
      isClosedMobile={isClosedMobile}
      setIsClosedMobile={setIsClosedMobile}
      main
    >
      <SEO title="Promo" />
      <Arrow top={0} right={0} z="-1" />
      <MobileMenu
        isClosedMobile={isClosedMobile}
        setIsClosedMobile={setIsClosedMobile}
      />
      <Divider
        text={language === 'RUS' ? 'С кем мы работаем' : 'Who we work with'}
      />
      <Cases language={language} />
      <WhatWeDo language={language} />
      <Banner
        title={bannerData.title}
        subtitle={bannerData.subtitle}
        description={bannerData.description}
        link={bannerData.link}
        image={bannerData.image.file.url}
      />
      <Divider text={language === 'RUS' ? 'Написано нами' : 'Our News'} />
      <News mainPage data={data.allContentfulNews.nodes} />
      {/* <Footer agency="true" /> */}
    </Layout>
    //   </Flex>
    // </ProvideLanguage>
  );
};

// const Provided = () => (
//   <ProvideLanguage>
//     <AgencyHome />
//   </ProvideLanguage>
// );

// location={location}

export default AgencyHome;
