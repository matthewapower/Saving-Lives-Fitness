import React from "react"
import Fade from "react-reveal/Fade"

export default function ValueColsTwo(props) {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-100 pt-24">
      <h2 className="heading max-w-2xl mx-4 text-center">{props.title}</h2>
      <Fade bottom cascade>
        <div className="container mx-auto px-8 grid md:grid-cols-3 gap-12 text-center md:-mb-64 relative z-10 transform translate-y-12">
          {props.pillars.map((p, i) => {
            return (
              <div key={i} className="text-center flex flex-col items-center">
                <div className="bg-gray-200 rounded-full relative mb-12 w-2/3">
                  <div className="inset-0 p-10 flex items-center justify-center">
                    <img src={p.icon.fixed.src} alt={p.name} className="mb-0" />
                  </div>
                </div>
                <h2 className="uppercase">{p.name}</h2>
                <p className="body">{p.description.description}</p>
              </div>
            )
          })}
        </div>
      </Fade>
      <div
        className="h-64 md:min-h-screen w-full"
        style={{ background: `url(${props.bg}) center center/cover` }}
      />
    </section>
  )
}
