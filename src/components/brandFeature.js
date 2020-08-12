import React from "react"

export default function BrandFeature(props) {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="heading">{props.heading}</h2>
        <p className="body mb-20">{props.description}</p>
        {props.sections.map((s, i) => {
          return (
            <div key={i}>
              <h3 className="subheading">{s.title}</h3>
              <p className="body mb-20">{s.description.description}</p>
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
            </div>
          )
        })}
      </div>
    </section>
  )
}
