import React from "react"
import { graphql } from "gatsby"
import Fade from "react-reveal/fade"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import PersonInfo from "../components/personInfo"

const SuccessStories = ({ data }) => {
  const content = data.contentfulTestimonialsPage
  return (
    <Layout>
      <SEO title="Success Stories" />
      <Hero
        bg={content.heroImage}
        title={content.title}
        description={content.description.description}
      />
      {content.testimonials.map((t, i) => {
        const addtl = i % 2 === 0 ? "" : "md:col-start-2 md:row-start-1"
        return (
          <section
            key={i}
            className={
              "py-20 px-4 md:px-0 " + (i % 2 === 0 ? "" : "bg-gray-200")
            }
          >
            <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center justify-center">
              <Fade>
                <div
                  className={
                    "mx-auto my-20 grid grid-cols-6 grid-rows-6 " + addtl
                  }
                >
                  <div className="bg-primary z-0 row-span-5 row-start-2 col-span-5 col-start-1" />
                  <img
                    src={t.photo.fixed.src}
                    alt={t.name}
                    className="relative mb-0 z-10 row-start-1 row-span-5 col-start-2 col-span-5"
                  />
                </div>
              </Fade>
              <PersonInfo
                name={t.name}
                handle={t.instagramHandle}
                description={t.description.description}
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
    contentfulTestimonialsPage(
      id: { eq: "f6669cf1-24b5-59d2-ab25-13c0e0987e70" }
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
      testimonials {
        name
        instagramHandle
        description {
          description
        }
        photo {
          fixed(width: 600, quality: 100) {
            src
          }
        }
      }
    }
  }
`

export default SuccessStories
