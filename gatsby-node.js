const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allDataJson {
        edges {
          node {
            id
            slug
          }
        }
      }
    }  
  `)
  
  result.data.allDataJson.edges.forEach(({ node }) => {
    createPage({
      path: 'shop/' + node.slug,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
        id: node.id
      },
    })
  })
}