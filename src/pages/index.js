import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHome from "../components/HeroHome"
import ValueCols from "../components/valueCols"
import FeaturedTestimonial from "../components/featuredTestimonial"
import SubscribeBanner from "../components/subscribeBanner"
import BrandSections from "../components/brandSections"

const IndexPage = ({ data }) => {
  const content = data.contentfulHomePage
  return (
    <Layout home>
      <SEO title="Home" />
      <HeroHome
        bg={content.heroImage}
        title={content.title}
        subtitle={content.subtitle}
        description={content.description.description}
      />
      <ValueCols
        pillars={content.brandPillars}
        text={content.membershipButtonText}
      />
      <FeaturedTestimonial
        bg={content.featureSectionBackground}
        headline={content.featuredSectionHeadline}
        testimonial={content.featuredSectionTestimonial}
      />
      <SubscribeBanner
        heading={content.subscribeHeading}
        bg={content.subscribeBackground}
      />
      <BrandSections brands={content.brandSections} />
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulHomePage(id: { eq: "32f57d61-8649-50d6-b1c9-cd56fe12e9ac" }) {
      id
      heroImage {
        fluid(maxWidth: 2000, quality: 100) {
          src
        }
      }
      title
      subtitle
      description {
        description
      }
      brandPillars {
        name
        icon {
          fixed(height: 300, quality: 100) {
            src
          }
        }
        description {
          description
        }
      }
      membershipButtonText
      featureSectionBackground {
        fluid(maxWidth: 2000, quality: 100) {
          src
        }
      }
      featuredSectionHeadline
      featuredSectionTestimonial {
        name
        instagramHandle
        headline
        description {
          description
        }
      }
      subscribeBackground {
        fluid(maxWidth: 1800, quality: 100) {
          src
        }
      }
      subscribeHeading
      brandSections {
        title
        description {
          description
        }
        brands {
          name
          logo {
            fixed(width: 200, quality: 100) {
              src
            }
          }
          destinationUrl
        }
        showNames
      }
    }
  }
`

export default IndexPage
