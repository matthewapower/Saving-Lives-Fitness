import React from "react"

export default function ValueFeature(props) {
  return (
    <section className="flex flex-col items-center justify-center py-20">
      <div className="container mx-auto px-8 text-center mb-12">
        <h2 className="heading">{props.heading}</h2>
        <p className="body mb-20 mx-auto">{props.description}</p>
        {props.pillars.map((p, i) => {
          return (
            <div key={i} className="mb-20 max-w-2xl mx-auto">
              <div className="grid grid-cols-3">
                <img
                  src={p.supportingImage.fixed.src}
                  alt="Saving Lives Fitness"
                  className="col-span-2 row-start-1 col-start-1"
                />
                <div
                  className="bg-primary-transparent rounded-full relative mb-12 col-start-2 row-start-1 col-span-2"
                  style={{ paddingBottom: "100%" }}
                >
                  <div className="absolute inset-0 p-20 flex items-center justify-center">
                    <img
                      src={p.icon.fixed.src}
                      alt={p.name}
                      className="w-3/4"
                      style={{ filter: "brightness(300)" }}
                    />
                  </div>
                </div>
              </div>
              <h2 className="uppercase">{p.name}</h2>
              <p className="body">{p.description.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
