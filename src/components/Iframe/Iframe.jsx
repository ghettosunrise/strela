import React from 'react';

const Iframe = ({ src }) => {
  const { value } = src?.content[0]?.content[0];

  return (
    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src={value}
    />
  );
};

export default Iframe;
