import React from "react"

export default function ValueColsTwo(props) {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-100 pt-24">
      <h2 className="heading max-w-2xl mx-4 text-center">{props.title}</h2>
      <div className="container mx-auto px-8 grid md:grid-cols-3 gap-12 text-center md:-mb-64 relative z-10 transform translate-y-24">
        {props.pillars.map((p, i) => {
          return (
            <div key={i} className="text-center">
              <div
                className="bg-gray-200 rounded-full relative mb-12"
                style={{ paddingBottom: "100%" }}
              >
                <div className="absolute inset-0 p-10 flex items-center justify-center">
                  <img src={p.icon.fixed.src} alt={p.name} className="mb-0" />
                </div>
              </div>
              <h2 className="uppercase">{p.name}</h2>
              <p className="body">{p.description.description}</p>
            </div>
          )
        })}
      </div>
      <div
        className="h-64 md:min-h-screen w-full"
        style={{ background: `url(${props.bg}) center center/cover` }}
      />
    </section>
  )
}
