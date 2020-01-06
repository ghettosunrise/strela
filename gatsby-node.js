/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function({ actions, graphql }) {
  const {
    data: {
      allContentfulCase: { edges: cases },
    },
  } = await graphql(`
    query allCases {
      allContentfulCase {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  cases.forEach(({ node: { id } }) => {
    actions.createPage({
      path: `/agency/case/${id}`,
      component: require.resolve(`./src/templates/case.js`),
      context: { id },
      key: { id },
    })
  })
}

exports.createPages = async function({ actions, graphql }) {
  // const {
  //   _data: {
  //     allContentfulNews: { edges: news },
  //   },
  // } = await graphql(`
  //   query allNews {
  //     allContentfulNews {
  //       edges {
  //         node {
  //           id
  //           hashtags {
  //             name
  //           }
  //         }
  //       }
  //     }
  //   }
  // `),

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
  `)

  hashtag.forEach(({ node: { value } }) => {
    const regex = `/${value}/gi`
    actions.createPage({
      path: `/agency/news/${value}`,
      component: require.resolve(`./src/templates/news.js`),
      context: { hashtag: regex },
      key: { hashtag: regex },
    })
  })
}

//   news.forEach(({ node: { id, hashtags } }) => {
//     actions.createPage({
//       path: `/agency/news/${hashtags.name}/${id}`,
//       component: require.resolve(`./src/templates/news.js`),
//       context: { id },
//       key: { id },
//     })
//   })
// }
