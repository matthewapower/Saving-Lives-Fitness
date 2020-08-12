import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import ValueFeature from "../components/valueFeature"
import TrainerSection from "../components/trainerSection"
import BrandFeature from "../components/brandFeature"

const About = ({ data }) => {
  const content = data.contentfulAboutPage
  return (
    <Layout>
      <SEO title="About" />
      <Hero
        bg={content.heroImage}
        title={content.title}
        subtitle={content.subtitle}
        description={content.description.description}
      />
      <ValueFeature
        heading={content.sectionOneHeading}
        description={content.sectionOneDescription.sectionOneDescription}
        pillars={content.brandPillars}
      />
      <TrainerSection
        heading={content.sectionTwoHeading}
        description={content.sectionTwoDescription.sectionTwoDescription}
        trainers={content.trainers}
      />
      <BrandFeature
        heading={content.sectionThreeHeading}
        description={content.sectionThreeDescription.sectionThreeDescription}
        sections={content.brandSections}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulAboutPage(id: { eq: "648e9038-38ed-58af-9451-23a75b68010c" }) {
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
      sectionOneHeading
      sectionOneDescription {
        sectionOneDescription
      }
      brandPillars {
        name
        icon {
          fixed(width: 200, quality: 100) {
            src
          }
        }
        description {
          description
        }
        supportingImage {
          fixed(width: 700, quality: 100) {
            src
          }
        }
      }
      sectionTwoHeading
      sectionTwoDescription {
        sectionTwoDescription
      }
      trainers {
        name
        instagramHandle
        description {
          description
        }
        image {
          fixed(width: 200, quality: 100) {
            src
          }
        }
      }
      sectionThreeHeading
      sectionThreeDescription {
        sectionThreeDescription
      }
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
        }
      }
    }
  }
`

export default About
