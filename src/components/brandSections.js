import React from "react"
import Fade from "react-reveal/Fade"

export default function BrandSections(props) {
  return (
    <section className="px-4">
      {props.brands.map((s, i) => {
        return (
          <div key={i} className="max-w-3xl py-20 mx-auto text-center">
            <h2 className="heading uppercase">{s.title}</h2>
            {s.description ? (
              <p className="body mx-auto">{s.description.description}</p>
            ) : (
              ""
            )}
            <Fade bottom cascade>
              <div
                className={`grid gap-8 md:grid-cols-${s.brands.length} justify-center items-center`}
              >
                {s.brands.map((b, i) => {
                  return (
                    <a
                      key={i}
                      href={b.destinationUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {b.logo.fixed ? (
                        <img
                          src={b.logo.fixed.src}
                          alt={b.name}
                          className="mx-auto"
                          style={{
                            maxHeight: "150px",
                          }}
                        />
                      ) : (
                        ""
                      )}
                      {s.showNames ? <p>{b.name}</p> : ""}
                    </a>
                  )
                })}
              </div>
            </Fade>
          </div>
        )
      })}
    </section>
  )
}
