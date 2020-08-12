import React from "react"

export default function BrandSections(props) {
  return (
    <section className="px-4">
      {props.brands.map((s, i) => {
        return (
          <div key={i} className="max-w-3xl py-20 mx-auto text-center">
            <h2 className="heading uppercase">{s.title}</h2>
            <p className="body">{s.description.description}</p>
            <div className="grid md:grid-cols-4">
              {s.brands.map((b, i) => {
                return (
                  <div key={i}>
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
    </section>
  )
}
