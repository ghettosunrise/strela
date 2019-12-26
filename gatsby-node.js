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
