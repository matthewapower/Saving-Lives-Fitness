import React from "react"
import Fade from "react-reveal/fade"

export default function HeroHome(props) {
  return (
    <section
      style={{ background: `url(${props.bg.fluid.src}) center center/cover` }}
    >
      <div className="container mx-auto flex flex-col items-center justify-end text-center px-8 py-40 pt-56">
        <h1 className="heading text-secondary mb-12">
          <Fade>{props.title}</Fade>
        </h1>
        <h2 className="subheading text-secondary">{props.subtitle}</h2>
        <p className="body text-white">{props.description}</p>
      </div>
    </section>
  )
}
