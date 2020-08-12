import React from "react"
import { Link } from "gatsby"

export default function ValueCols(props) {
  return (
    <section className="flex flex-col items-center justify-center pb-20">
      <div className="container mx-auto px-8 grid md:grid-cols-3 gap-8 -mt-32 text-center mb-12">
        {props.pillars.map((p, i) => {
          return (
            <div key={i} className="text-center">
              <div
                className="bg-gray-200 rounded-full relative mb-12"
                style={{ paddingBottom: "100%" }}
              >
                <div className="absolute inset-0 p-20 flex items-center justify-center">
                  <img src={p.icon.fixed.src} alt={p.name} className="w-3/4" />
                </div>
              </div>
              <h2 className="uppercase">{p.name}</h2>
              <p className="body">{p.description.description}</p>
            </div>
          )
        })}
      </div>
      <Link to="/memberships" className="btn-small leading-normal text-center">
        {props.text}
      </Link>
    </section>
  )
}
