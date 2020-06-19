import React, { useEffect, useState } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Iframe = src => {
  const [value, setValue] = useEffect(null);
  console.log(src, 'SOURCE');

  useEffect(() => {
    setValue(documentToReactComponents(src));
  }, []);

  console.log('Iframe -> value', value);

  return (
    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      // src={value}
    />
  );
};

export default Iframe;
