import React from "react"
import { graphql } from "gatsby"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import ProductCard from "../components/productCard"
import ValueColsTwo from "../components/valueColsTwo"

const Shop = ({ data }) => {
  const content = data.contentfulShopContent
  const products = data.allShopifyProduct.nodes
  return (
    <Layout>
      <SEO title="Shop" />
      <Hero
        bg={content.shopHeroBg}
        title={content.shopHeroTitle}
        description={content.shopHeroDescription.shopHeroDescription}
      />
      <Fade bottom>
        <section className="py-24">
          <div className="container mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-24 items-center justify-center">
            {products.map((p, i) => {
              return (
                <ProductCard
                  key={i}
                  title={p.title}
                  slug={`/shop/${p.handle}`}
                  price={p.priceRange.maxVariantPrice.amount}
                  img={p.images[0].localFile.childImageSharp.fixed.src}
                />
              )
            })}
          </div>
        </section>
      </Fade>
      <ValueColsTwo
        pillars={content.productsFeatureValues}
        bg={content.productsIndexImage.fluid.src}
        title={content.productsFeatureTitle}
      />
    </Layout>
  )
}

export const query = graphql`
  {
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
      productsIndexImage {
        fluid(maxWidth: 2000, quality: 100) {
          src
        }
      }
      productsSingleImage {
        fluid(maxWidth: 2000, quality: 100) {
          src
        }
      }
    }
    allShopifyProduct {
      nodes {
        handle
        title
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
  }
`

export default Shop
