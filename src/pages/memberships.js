import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const Memberships = ({ data }) => {
  const content = data.contentfulMembershipPage
  return (
    <Layout>
      <SEO title="Memberships" />
      <Hero
        bg={content.heroImage}
        title={content.title}
        description={content.description.description}
      />
      {content.memberships.map((m, i) => {
        const addtl = i % 2 === 0 ? "" : "md:col-start-2 md:row-start-1"
        return (
          <section
            key={i}
            className={
              "py-40 px-4 md:px-0 " + (i % 2 === 0 ? "" : "bg-gray-200")
            }
          >
            <div className="container mx-auto grid gap-8 md:grid-cols-2 items-center justify-center">
              <div>
                <h2 className="subheading mb-20 pb-8 border-b border-secondary inline-block">
                  {m.name}
                </h2>
                <p className="body">{m.description.description}</p>
                <div className="service-wrap mb-12">
                  {documentToReactComponents(m.details.json)}
                </div>
                <a
                  href={m.serviceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-small inline-block"
                >
                  Start Here
                </a>
              </div>
              <div
                className="rounded-full"
                style={{
                  background: `url(${m.image.fixed.src}) center center/cover`,
                  paddingBottom: "100%",
                }}
              />
            </div>
          </section>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulMembershipPage(
      id: { eq: "b4536df4-3374-5a36-bb14-e10dc11f9d36" }
    ) {
      heroImage {
        fluid(maxWidth: 2000, quality: 100) {
          src
        }
      }
      title
      description {
        description
      }
      memberships {
        name
        description {
          description
        }
        details {
          json
        }
        serviceUrl
        image {
          fixed(width: 700, quality: 100) {
            src
          }
        }
      }
    }
  }
`

export default Memberships
