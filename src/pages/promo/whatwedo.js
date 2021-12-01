import React, { useState } from 'react';
import { useLanguage } from '../../hooks';

import Layout from '../../components/layout';
import Services from '../../containers/Services';
import Contact from '../../containers/ContactUs';
import SEO from '../../components/seo';
import Arrow from '../../components/Arrow';

const WhatWeDo = ({ props }) => {
  const [isClosed, setIsClosed] = useState(true);
  const [isClosedMobile, setIsClosedMobile] = useState(true);

  const [[language, setLanguage]] = useLanguage();
  return (
    <Layout
      isClosed={isClosed}
      setIsClosed={setIsClosed}
      isClosedMobile={isClosedMobile}
      setIsClosedMobile={setIsClosedMobile}
    >
      <SEO title="WhatWeDo" />
      <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
      <Arrow top="105px" right="0" />
      <Services />
    </Layout>
  );
};

export default WhatWeDo;
