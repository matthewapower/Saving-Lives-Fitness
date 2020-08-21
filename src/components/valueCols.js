import React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

export default function ValueCols(props) {
  return (
    <section className="flex flex-col items-center justify-center pb-20">
      <Fade bottom cascade>
        <div className="container mx-auto px-8 grid md:grid-cols-3 gap-12 -mt-24 text-center mb-12">
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
      <Link to="/memberships" className="btn-small leading-normal text-center">
        {props.text}
      </Link>
    </section>
  )
}
