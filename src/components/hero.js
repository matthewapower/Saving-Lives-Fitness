import React from "react"
import Fade from "react-reveal/Fade"
import { css } from "@emotion/core"

export default function HeroHome(props) {
  return (
    <section
      css={css`
        background: url(${props.bg.fluid.src}) center center/cover;
        position: relative;

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
        }
      `}
    >
      <div className="container mx-auto flex flex-col items-center justify-end text-center px-8 py-40 pt-56 relative z-10">
        <h1 className="heading text-secondary mb-12">
          <Fade>{props.title}</Fade>
        </h1>
        <h2 className="subheading text-secondary">{props.subtitle}</h2>
        <p className="body text-white">{props.description}</p>
      </div>
    </section>
  )
}
