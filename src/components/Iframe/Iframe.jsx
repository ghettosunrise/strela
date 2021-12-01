import React, { useEffect, useState } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Iframe = ({ src }) => {
  const x = documentToReactComponents(src);

  const source = x[0].props.children.join();
  return (
    <>
      {source && (
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={source}
        />
      )}
    </>
  );
};

export default Iframe;
