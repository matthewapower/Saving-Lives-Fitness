import React from "react"

export default function ValueColsThree(props) {
  return (
    <section className="flex flex-col items-center justify-center pb-20">
      <div
        className="py-56 w-full text-center"
        style={{ background: `url(${props.bg}) center center/cover` }}
      >
        <h2 className="heading max-w-2xl text-center text-white mx-4 md:mx-auto">
          {props.title}
        </h2>
      </div>
      <div className="container mx-auto px-8 grid md:grid-cols-3 gap-12 -mt-32 text-center mb-12">
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
    </section>
  )
}
