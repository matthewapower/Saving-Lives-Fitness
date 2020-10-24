import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const About = ({ data }) => {
  const content = data.contentfulAboutPage
  return (
    <Layout>
      <SEO title="Terms & Conditions" />
      <Hero bg={content.heroImage} title="Terms & Conditions" />
      <section>
        <div className="container mx-auto px-8 py-24">
          {documentToReactComponents(
            data.contentfulSettings.termsAndConditions.json
          )}
        </div>
      </section>
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
    }
    contentfulSettings(id: { eq: "8079e588-0cc4-5c87-89bd-fae497422578" }) {
      termsAndConditions {
        json
      }
    }
  }
`

export default About
