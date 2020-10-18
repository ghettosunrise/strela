import React, { useState } from 'react';

import Layout from '../../components/layout';
import Contact from '../../containers/ContactUs';
import SEO from '../../components/seo';
import About from '../../containers/AboutUs';
import Arrow from '../../components/Arrow';
import { ProvideLanguage } from '../../hooks/useLanguage';

const AboutUs = () => {
  const [isClosed, setIsClosed] = useState(true);
  const [isClosedMobile, setIsClosedMobile] = useState(true);
  return (
    <Layout
      isClosed={isClosed}
      setIsClosed={setIsClosed}
      isClosedMobile={isClosedMobile}
      setIsClosedMobile={setIsClosedMobile}
    >
      <SEO title="About Us" />
      <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
      <Arrow bottom="-2200px" left="-3%" />
      <About />
    </Layout>
  );
};

export default AboutUs;
