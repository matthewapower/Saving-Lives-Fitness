import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import ContactForm from "../components/contactForm"
import { css } from "@emotion/core"

const Contact = ({ data }) => {
  const content = data.contentfulContactPage
  return (
    <Layout>
      <SEO title="Contact" />
      <Hero
        bg={content.heroImage}
        title={content.title}
        description={content.description.description}
      />
      <section className={"py-40 px-4 md:px-0"}>
        <div className="container mx-auto grid gap-8 md:grid-cols-2 items-center justify-center">
          <div>
            <h2 className="subheading">{content.formHeading}</h2>
            <ContactForm />
          </div>
          <div
            className="rounded-full"
            style={{
              background: `url(${content.formImage.fixed.src}) center center/cover`,
              paddingBottom: "100%",
            }}
          />
        </div>
      </section>
      <section className="py-12 px-4 md:px-12">
        <div
          css={css`
            background: url(${content.ctaBackgroundImage.fluid.src}) center
              center/cover;
            position: relative;
            border-radius: 50px;

            &:before {
              content: "";
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              background: #3ad6ea;
              z-index: 0;
              opacity: 0.7;
              border-radius: 50px;
            }
          `}
          className="w-full p-12 md:p-32 container mx-auto"
        >
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-white font-bold subheading mb-12">
              {content.ctaTitle}
            </h2>
            <a
              href={`mailto:${content.contactEmail}`}
              className="btn-large inline-block text-secondary bg-white"
            >
              {content.ctaButtonText}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulContactPage(id: { eq: "7dc0e656-d541-5489-a3de-afdd6647b9f2" }) {
      heroImage {
        fluid(maxWidth: 2000, quality: 100) {
          src
        }
      }
      title
      description {
        description
      }
      formHeading
      formImage {
        fixed(width: 700, quality: 100) {
          src
        }
      }
      ctaTitle
      ctaButtonText
      contactEmail
      ctaBackgroundImage {
        fluid(maxWidth: 2000, quality: 100) {
          src
        }
      }
    }
  }
`

export default Contact
