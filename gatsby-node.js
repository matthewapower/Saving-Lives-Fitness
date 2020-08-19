const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allShopifyProduct {
          nodes {
            id
            handle
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create Product page
  result.data.allShopifyProduct.nodes.forEach(node => {
    createPage({
      path: `/shop/${node.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        productId: node.id,
        productContent: result.data.contentfulShopProduct,
      },
    })
  })
}
