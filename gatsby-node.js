/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};

exports.createPages = async function({ actions, graphql }) {
  const {
    data: {
      allContentfulHashtag: { edges: hashtag },
    },
  } = await graphql(`
    query hashtags {
      allContentfulHashtag {
        edges {
          node {
            id
            name
            value
          }
        }
      }
    }
  `);

  hashtag.forEach(({ node: { value } }) => {
    const regex = `/${value}/gi`;
    actions.createPage({
      path: `/promo/news/${value}`,
      component: require.resolve('./src/templates/news.js'),
      context: { hashtag: regex },
      key: { hashtag: regex },
    });
  });

  const {
    data: {
      allContentfulCase: { edges: cases },
    },
  } = await graphql(`
    query allCases {
      allContentfulCase {
        edges {
          node {
            customId
            hashtags {
              value
            }
          }
        }
      }
    }
  `);

  cases.forEach(({ node: { customId, hashtags } }) => {
    actions.createPage({
      path: `/promo/case/${customId}`,
      component: require.resolve('./src/templates/case.js'),
      context: {
        customId,
        hashtagRegex: `/(${hashtags.map(({ value }) => value).join('|')})/g`,
      },
      key: { customId },
    });
  });

  const {
    data: {
      allContentfulArtist: { edges: artist },
    },
  } = await graphql(
    `
      query allArtists {
        allContentfulArtist {
          edges {
            node {
              id
              linkId
            }
          }
        }
      }
    `
  );

  artist.forEach(({ node: { linkId } }) => {
    actions.createPage({
      path: `/booking/${linkId}`,
      component: require.resolve('./src/templates/artist.js'),
      context: { linkId },
      key: { linkId },
    });
  });
};

//   news.forEach(({ node: { id, hashtags } }) => {
//     actions.createPage({
//       path: `/agency/news/${hashtags.name}/${id}`,
//       component: require.resolve(`./src/templates/news.js`),
//       context: { id },
//       key: { id },
//     })
//   })
// }
