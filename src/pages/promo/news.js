import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Contact from '../../containers/ContactUs';
import Layout from '../../components/layout';
import NewsPage from '../../containers/NewsPageContainer';
import SEO from '../../components/seo';
import Arrow from '../../components/Arrow';

const News = () => {
  const [isClosed, setIsClosed] = useState(true);
  const [isClosedMobile, setIsClosedMobile] = useState(true);

  const _data = useStaticQuery(graphql`
    query MyNews {
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

      allContentfulHashtag {
        nodes {
          name
          value
          id
        }
      }
    }
  `);

  return (
    <Layout
      isClosed={isClosed}
      setIsClosed={setIsClosed}
      isClosedMobile={isClosedMobile}
      setIsClosedMobile={setIsClosedMobile}
      page="news"
    >
      <SEO title="News" />
      <Contact isClosed={isClosed} setIsClosed={setIsClosed} />
      <Arrow top="105px" left="-3%" />
      <NewsPage
        hashtags={_data.allContentfulHashtag.nodes}
        data={_data.allContentfulNews.nodes}
        page="news"
      />
    </Layout>
  );
};

export default News;
