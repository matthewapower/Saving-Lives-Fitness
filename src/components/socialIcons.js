import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import fb from "../images/fb.svg"
import tw from "../images/tw.svg"
import li from "../images/in.svg"
import yt from "../images/yt.svg"
import ig from "../images/ig.svg"

export default function SocialIcons() {
  const data = useStaticQuery(graphql`
    {
      contentfulSettings(id: { eq: "8079e588-0cc4-5c87-89bd-fae497422578" }) {
        facebookUrl
        twitterUrl
        linkedInUrl
        youtubeUrl
        instagramUrl
      }
    }
  `)
  const content = data.contentfulSettings
  return (
    <div className="flex justify-center">
      {content.facebookUrl ? (
        <a href={content.facebookUrl} target="_blank" rel="noopener noreferrer">
          <img className="mx-2 md:mx-4 w-10" src={fb} alt="Facebook" />
        </a>
      ) : (
        ""
      )}
      {content.twitterUrl ? (
        <a href={content.twitterUrl} target="_blank" rel="noopener noreferrer">
          <img className="mx-2 md:mx-4 w-10" src={tw} alt="Twitter" />
        </a>
      ) : (
        ""
      )}
      {content.linkedInUrl ? (
        <a href={content.linkedInUrl} target="_blank" rel="noopener noreferrer">
          <img className="mx-2 md:mx-4 w-10" src={li} alt="Linkedin" />
        </a>
      ) : (
        ""
      )}
      {content.youtubeUrl ? (
        <a href={content.youtubeUrl} target="_blank" rel="noopener noreferrer">
          <img className="mx-2 md:mx-4 w-10" src={yt} alt="Youtube" />
        </a>
      ) : (
        ""
      )}
      {content.instagramUrl ? (
        <a
          href={content.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="mx-2 md:mx-4 w-10" src={ig} alt="Instagram" />
        </a>
      ) : (
        ""
      )}
    </div>
  )
}
