import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import ValueColsThree from "../components/valueColsThree"
import ProductShop from "../components/productShop"
import ProductRec from "../components/productRec"

const Product = ({ data }) => {
  const product = data.shopifyProduct
  const content = data.contentfulShopContent
  const recs = data.allShopifyProduct.nodes
  return (
    <Layout>
      <SEO title={product.title} />
      <Hero
        bg={content.shopHeroBg}
        title={content.shopHeroTitle}
        description={content.shopHeroDescription.shopHeroDescription}
      />
      <ProductShop product={product} />
      <ValueColsThree
        pillars={content.productsFeatureValues}
        bg={content.productsSingleImage.fluid.src}
        title={content.productsFeatureTitle}
      />
      <ProductRec products={recs} />
    </Layout>
  )
}

export const query = graphql`
  query productPage($productId: String!) {
    shopifyProduct(id: { eq: $productId }) {
      id
      title
      descriptionHtml
      options {
        name
        values
      }
      variants {
        shopifyId
        price
        selectedOptions {
          name
          value
        }
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                src
                aspectRatio
              }
            }
          }
        }
      }
    }

    allShopifyProduct(limit: 3, filter: { id: { ne: $productId } }) {
      nodes {
        title
        handle
        priceRange {
          maxVariantPrice {
            amount
          }
        }
        images {
          localFile {
            childImageSharp {
              fixed(width: 700, quality: 100) {
                src
              }
            }
          }
        }
      }
    }

    contentfulShopContent(id: { eq: "b444f455-5b17-5159-9272-13922cb29fd5" }) {
      shopHeroBg {
        fluid(maxWidth: 2000, quality: 100) {
          src
        }
      }
      shopHeroTitle
      shopHeroDescription {
        shopHeroDescription
      }
      productsFeatureTitle
      productsFeatureValues {
        icon {
          fixed(width: 700, quality: 100) {
            src
          }
        }
        name
        description {
          description
        }
      }
      productsSingleImage {
        fluid(maxWidth: 2000, quality: 100) {
          src
        }
      }
    }
  }
`

export default Product
