/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      contentfulSettings(id: { eq: "8079e588-0cc4-5c87-89bd-fae497422578" }) {
        aboutPageTitle
        membershipPageTitle
        testimonialPageTitle
        contactPageTitle
        shopLive
      }
    }
  `)
  const [navOpen, setNavOpen] = useState(false)
  let links = [
    { name: data.contentfulSettings.aboutPageTitle, dest: "/about" },
    // { name: data.contentfulSettings.membershipPageTitle, dest: "/memberships" },
    {
      name: data.contentfulSettings.testimonialPageTitle,
      dest: "/success-stories",
    },
    { name: data.contentfulSettings.contactPageTitle, dest: "/contact" },
  ]

  if (data.contentfulSettings.shopLive) {
    links = [
      { name: data.contentfulSettings.aboutPageTitle, dest: "/about" },
      // {
      //   name: data.contentfulSettings.membershipPageTitle,
      //   dest: "/memberships",
      // },
      { name: "Apparel", dest: "/shop" },
      {
        name: data.contentfulSettings.testimonialPageTitle,
        dest: "/success-stories",
      },
      { name: data.contentfulSettings.contactPageTitle, dest: "/contact" },
      { name: "Cart", dest: "/cart" },
    ]
  }

  return (
    <div
      className={`min-h-screen relative ${
        navOpen ? "h-screen overflow-hidden" : ""
      }`}
    >
      <Header
        siteTitle={data.site.siteMetadata.title}
        home={props.home}
        links={links}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />
      <main>{props.children}</main>
      <Footer links={links} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
