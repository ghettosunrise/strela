import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Flex from '../styled/flex';
import News from '../components/News';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NewsTemplate = ({ data, page }) => {
  const [isClosed, setIsClosed] = useState(true);
  const [isClosedMobile, setIsClosedMobile] = useState(true);

  return (
    <Layout
      isClosed={isClosed}
      setIsClosed={setIsClosed}
      isClosedMobile={isClosedMobile}
      setIsClosedMobile={setIsClosedMobile}
      page={page}
    >
      <SEO title="Case" />
      <Flex width="100%" paddingAll="0 49px 46px">
        <Flex
          row
          width="100%"
          justify="space-between"
          align="stretch"
          wrap="wrap"
          // top="-32px"
        >
          {data?.allContentfulNews?.edges?.map(
            ({
              node: {
                size,
                title,
                date,
                link,
                special,
                extralarge,
                hashtags,
                image: {
                  file: { url },
                },
              },
            }) => (
              <News
                size={size}
                title={title}
                link={link}
                src={url}
                date={date}
                special={special}
                extraLarge={extralarge}
                hashtags={hashtags}
              />
            )
          )}
        </Flex>
      </Flex>
    </Layout>
  );
};

export const query = graphql`
  query FilteredNews($hashtag: String) {
    allContentfulNews(
      filter: { hashtags: { elemMatch: { name: { regex: $hashtag } } } }
    ) {
      edges {
        node {
          id
          size
          date
          title
          link
          special
          extralarge
          image {
            file {
              url
            }
          }
          hashtags {
            id
            name
            value
          }
        }
      }
    }
  }
`;

export default NewsTemplate;
