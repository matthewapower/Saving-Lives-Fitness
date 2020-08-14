import React from "react"
import PersonInfo from "./personInfo"

export default function TrainerSection(props) {
  return (
    <section className="bg-gray-300 py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="heading">{props.heading}</h2>
        <p className="body mb-20 mx-auto">{props.description}</p>
        {props.trainers.map((t, i) => {
          return (
            <div className="grid md:grid-cols-3 max-w-2xl mb-20 items-center mx-auto">
              <img src={t.image.fixed.src} alt={t.name} />
              <PersonInfo
                className="md:col-span-2"
                name={t.name}
                handle={t.instagramHandle}
                description={t.description.description}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
