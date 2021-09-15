import React, { useEffect, useState } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Iframe = ({ src }) => {
  const x = documentToReactComponents(src);

  const source = x[0].props.children.join();
  console.log('🚀 ~ file: Iframe.jsx ~ line 9 ~ Iframe ~ source', source);

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

{
  /* <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/886996498&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/pointparties" title="point." target="_blank" style="color: #cccccc; text-decoration: none;">point.</a> · <a href="https://soundcloud.com/pointparties/point-054-podcast-mato" title="Point. 054 Podcast: Ma.to" target="_blank" style="color: #cccccc; text-decoration: none;">Point. 054 Podcast: Ma.to</a></div> */
}
