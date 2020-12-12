import React from "react"
import Fade from "react-reveal/Fade"

export default function ValueFeature(props) {
  return (
    <section className="flex flex-col items-center justify-center py-20">
      <div className="container mx-auto px-8 text-center mb-12">
        <h2 className="heading">{props.heading}</h2>
        <p className="body mb-20 mx-auto">{props.description}</p>
        <Fade bottom cascade>
          <div>
            {props.pillars.map((p, i) => {
              return (
                <div key={i} className="mb-20 max-w-md mx-auto">
                  {p.icon ? (
                    <div className="grid grid-cols-3 mb-6">
                      <div
                        style={{
                          background: `url(${p.supportingImage.fixed.src}) center center/cover`,
                        }}
                        className="col-span-2 row-start-1 col-start-1 rounded-full"
                      />
                      <div
                        className="bg-primary-transparent rounded-full relative col-start-2 row-start-1 col-span-2"
                        style={{ paddingBottom: "100%" }}
                      >
                        <div className="absolute inset-0 p-10 flex items-center justify-center mb-0">
                          <img
                            src={p.icon.fixed.src}
                            alt={p.name}
                            className="w-3/4 mb-0"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="bg-primary-transparent rounded-full relative col-start-2 row-start-1 col-span-2"
                      style={{ paddingBottom: "100%" }}
                    >
                      <div className="absolute inset-0 p-10 flex items-center justify-center mb-0">
                        <img
                          src={p.supportingImage.fixed.src}
                          alt={p.name}
                          className="w-11/12 mb-0 rounded-md shadow-lg"
                        />
                      </div>
                    </div>
                  )}
                  <h2 className="uppercase">{p.name}</h2>
                  <p className="body">{p.description.description}</p>
                </div>
              )
            })}
          </div>
        </Fade>
      </div>
    </section>
  )
}
