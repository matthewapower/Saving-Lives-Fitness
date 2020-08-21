import React from "react"
import Fade from "react-reveal/Fade"

export default function BrandFeature(props) {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-3xl mx-auto text-center">
        <h2 className="heading">{props.heading}</h2>
        <p className="body mb-20 mx-auto">{props.description}</p>
        {props.sections.map((s, i) => {
          return (
            <div key={i}>
              <h3 className="subheading">{s.title}</h3>
              <p className="body mb-20 mx-auto">{s.description.description}</p>
              <Fade bottom cascade>
                <div className="grid md:grid-cols-4 mb-20">
                  {s.brands.map((b, i) => {
                    return (
                      <div>
                        <img
                          src={b.logo.fixed.src}
                          alt={b.name}
                          className="mx-auto"
                        />
                        <p>{b.name}</p>
                      </div>
                    )
                  })}
                </div>
              </Fade>
            </div>
          )
        })}
      </div>
    </section>
  )
}
