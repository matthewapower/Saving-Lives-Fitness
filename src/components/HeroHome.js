import React from "react"
import { Link } from "gatsby"

export default function HeroHome(props) {
  return (
    <section
      style={{ background: `url(${props.bg.fluid.src}) center center/cover` }}
    >
      <div
        className="container mx-auto flex flex-col items-center justify-end text-center px-8"
        style={{ paddingTop: "50vh" }}
      >
        <h1 className="heading text-white mb-12">{props.title}</h1>
        <Link to="/" className="btn-small-white mb-12">
          Get Started
        </Link>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-end text-center pt-32 pb-64 px-8">
        <h2 className="subheading text-secondary">{props.subtitle}</h2>
        <p className="body text-white">{props.description}</p>
      </div>
    </section>
  )
}
